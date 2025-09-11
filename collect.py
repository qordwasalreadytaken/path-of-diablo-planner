import os
import json
import datetime

# --- CONFIG ---
SNAPSHOT_DIR = "snapshots"
INDEX_FILE = "index.json"
CHARACTER_FILE = "sc_ladder.json"   # or hc_ladder.json
BASE_IMPORT_URL = "https://build.pathofdiablo.com/?"  # change if needed

# Stub: your existing "import character → final URL" function
def build_final_url(character):
    """
    Convert character data into the full builder URL.
    Replace this stub with your existing import logic.
    """
    # Example only
    return f"{BASE_IMPORT_URL}class={character['class'].lower()}&level={character['level']}"


def load_json(filename):
    if not os.path.exists(filename):
        return {}
    with open(filename, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(filename, data):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


def main():
    today = datetime.date.today().isoformat()  # e.g. "2025-09-08"

    # Load character data (however you normally get it)
    characters = load_json(CHARACTER_FILE)

    # Make sure output dir exists
    os.makedirs(SNAPSHOT_DIR, exist_ok=True)

    # Build snapshot for today
    snapshot = {}
    for char in characters:
        name = char.get("name")
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
