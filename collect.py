import os
import json
import datetime
from urllib.parse import urlencode

# --- CONFIG ---
SNAPSHOT_DIR = "snapshots"
INDEX_FILE = "index.json"
CHARACTER_FILE = "sc_ladder.json"   # or hc_ladder.json
BASE_IMPORT_PATH = "https://build.pathofdiablo.com/?"  # change if needed
GAME_VERSION = 2                    # PoD-specific features

# Replace with however you pass global settings in your builder
SETTINGS = {
    "parameters": 1,
    "coupling": 0,
    "synthwep": 0,
    "autocast": 0,
}


# --- URL BUILDER (real implementation) ---
def build_final_url(character, settings=SETTINGS, game_version=GAME_VERSION, base_path=BASE_IMPORT_PATH):
    params = {}

    # Core stats
    param_quests = int(character.get("quests_completed", 0)) or 0
    param_run = int(character.get("running", 0)) or 0

    params["class"] = character["Class"].lower()
    params["level"] = int(character["Stats"]["Level"])
    params["difficulty"] = int(character.get("difficulty", 0))
    params["quests"] = param_quests
    params["strength"] = int(character["Stats"].get("Strength", 0))
    params["dexterity"] = int(character["Stats"].get("Dexterity", 0))
    params["vitality"] = int(character["Stats"].get("Vitality", 0))
    params["energy"] = int(character["Stats"].get("Energy", 0))
    params["url"] = int(settings.get("parameters", 0))
    params["coupling"] = int(settings.get("coupling", 0))
    params["synthwep"] = int(settings.get("synthwep", 0))

    if game_version == 2:
        params["running"] = param_run
        params["autocast"] = int(settings.get("autocast", 0))

    # Skills: expected as a list of levels
    skill_levels = character.get("Skills", [])
    skill_string = "".join(f"{lvl:02d}" for lvl in skill_levels)
    params["skills"] = skill_string

    # TODO: adapt the following sections once you confirm how your ladder JSON represents
    # equipped items, corruptions, socketed, effects, mercenary, golem, charms, etc.
    # For now we’ll leave them out to avoid breaking things.

    return f"{base_path}?{urlencode(params, doseq=True)}"


# --- JSON helpers ---
def load_json(filename):
    if not os.path.exists(filename):
        return {}
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(filename, data):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


# --- Main collector ---
def main():
    today = datetime.date.today().isoformat()  # e.g. "2025-09-11"

    # Load ladder character data
    characters = load_json(CHARACTER_FILE)

    # Make sure output dir exists
    os.makedirs(SNAPSHOT_DIR, exist_ok=True)

    # Build snapshot for today
    snapshot = {}
    for char in characters:
        name = char.get("Name")
        if not name:
            continue
        url = build_final_url(char)
        snapshot[name] = {
            "url": url,
            "timestamp": today
        }

    # Save today's snapshot
    snap_file = os.path.join(SNAPSHOT_DIR, f"{today}.json")
    save_json(snap_file, snapshot)

    # Update index.json
    index = load_json(INDEX_FILE)

    for name in snapshot:
        if name not in index:
            index[name] = []
        if today not in index[name]:
            index[name].append(today)

    save_json(INDEX_FILE, index)

    print(f"✅ Snapshot for {today} saved ({len(snapshot)} characters).")


if __name__ == "__main__":
    main()
