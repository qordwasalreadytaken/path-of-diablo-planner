import os
import json
import datetime
from urllib.parse import urlencode, quote_plus
import urllib.parse

# --- CONFIG ---
SNAPSHOT_DIR = "snapshots"
INDEX_FILE = "index.json"
CHARACTER_FILE = "sc_ladder.json"   # or hc_ladder.json
#BASE_IMPORT_PATH = "https://build.pathofdiablo.com/"  # change if needed
BASE_IMPORT_PATH = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html"
GAME_VERSION = 2                    # PoD-specific features

# Replace with however you pass global settings in your builder
SETTINGS = {
    "parameters": 1,
    "coupling": 0,
    "synthwep": 0,
    "autocast": 0,
}

skills_amazon = [
    {"name": "Jab", "i": 0},
    {"name": "Power Strike", "i": 1},
    {"name": "Poison Javelin", "i": 2},
    {"name": "Fend", "i": 3},
    {"name": "Lightning Bolt", "i": 4},
    {"name": "Charged Strike", "i": 5},
    {"name": "Plague Javelin", "i": 6},
    {"name": "Molten Strike", "i": 7},
    {"name": "Lightning Strike", "i": 8},
    {"name": "Lightning Fury", "i": 9},
    {"name": "Inner Sight", "i": 10},
    {"name": "Lethal Strike", "i": 11},
    {"name": "Phase Run", "i": 12},
    {"name": "Dodge", "i": 13},
    {"name": "Avoid", "i": 14},
    {"name": "Penetrate", "i": 15},
    {"name": "Evade", "i": 16},
    {"name": "Decoy", "i": 17},
    {"name": "Valkyrie", "i": 18},
    {"name": "Pierce", "i": 19},
    {"name": "Cold Arrow", "i": 20},
    {"name": "Magic Arrow", "i": 21},
    {"name": "Multiple Shot", "i": 22},
    {"name": "Fire Arrow", "i": 23},
    {"name": "Ice Arrow", "i": 24},
    {"name": "Guided Arrow", "i": 25},
    {"name": "Exploding Arrow", "i": 26},
    {"name": "Strafe", "i": 27},
    {"name": "Immolation Arrow", "i": 28},
    {"name": "Freezing Arrow", "i": 29},
]
skills_assassin = [
    {"name": "Dragon Claw", "i":0},
    {"name": "Fists of Fire", "i":1},
    {"name": "Claws of Thunder", "i":2},
    {"name": "Blades of Ice", "i":3},
    {"name": "Tiger Strike", "i":4},
    {"name": "Dragon Talon", "i":5},
    {"name": "Cobra Strike", "i":6},
    {"name": "Dragon Flight", "i":7},
    {"name": "Claw Mastery", "i":9},
    {"name": "Psychic Hammer", "i":10},
    {"name": "Burst of Speed", "i":11},
    {"name": "Weapon Block", "i":13},
    {"name": "Cloak of Shadows", "i":14},
    {"name": "Fade", "i":15},
    {"name": "Shadow Warrior", "i":16},
    {"name": "Mind Blast", "i":17},
    {"name": "Venom", "i":18},
    {"name": "Shadow Master", "i":19},
    {"name": "Fire Blast", "i":20},
    {"name": "Shock Web", "i":21},
    {"name": "Blade Throw", "i":22},
    {"name": "Charged Bolt Sentry", "i":23},
    {"name": "Wake of Fire", "i":24},
    {"name": "Blade Fury", "i":25},
    {"name": "Lightning Sentry", "i":26},
    {"name": "Wake of Inferno", "i":27},
    {"name": "Death Sentry", "i":28},
    {"name": "Blade Shield", "i":29}
]
skills_barbarian = [
    {"name": "Howl", "i":0},
    {"name": "Find Potion", "i":1},
    {"name": "Taunt", "i":2},
    {"name": "Shout", "i":3},
    {"name": "Find Item", "i":4},
    {"name": "Battle Cry", "i":5},
    {"name": "Battle Orders", "i":6},
    {"name": "Grim Ward", "i":7},
    {"name": "War Cry", "i":8},
    {"name": "Battle Command", "i":9},
    {"name": "Edged Weapon Mastery", "i":10},
    {"name": "Pole Weapon Mastery", "i":11},
    {"name": "Blunt Weapon Mastery", "i":12},
    {"name": "Thrown Weapon Mastery", "i":13},
    {"name": "Increased Stamina", "i":14},
    {"name": "Counter Attack", "i":15},
    {"name": "Iron Skin", "i":16},
    {"name": "Increased Speed", "i":17},
    {"name": "Puncture", "i":18},
    {"name": "Whirling Axes", "i":19},
    {"name": "Natural Resistance", "i":20},
    {"name": "Double Swing", "i":21},
    {"name": "Frenzy", "i":22},
    {"name": "Bash", "i":23},
    {"name": "Cleave", "i":24},
    {"name": "Stun", "i":25},
    {"name": "Leap Slam", "i":26},
    {"name": "Double Throw", "i":27},
    {"name": "Concentrate", "i":28},
    {"name": "Ethereal Throw", "i":29},
    {"name": "Whirlwind", "i":30},
]
skills_druid = [
    {"name": "Firestorm", "i":0},
    {"name": "Molten Boulder", "i":1},
    {"name": "Flame Dash", "i":2},
    {"name": "Arctic Blast", "i":3},
    {"name": "Fissure", "i":4},
    {"name": "Cyclone Armor", "i":5},
    {"name": "Twister", "i":6},
    {"name": "Volcano", "i":7},
    {"name": "Tornado", "i":8},
    {"name": "Armageddon", "i":9},
    {"name": "Hurricane", "i":10},
    {"name": "Werewolf", "i":11},
    {"name": "Lycanthropy", "i":12},
    {"name": "Werebear", "i":13},
    {"name": "Feral Rage", "i":14},
    {"name": "Maul", "i":15},
    {"name": "Rabies", "i":16},
    {"name": "Fire Claws", "i":17},
    {"name": "Hunger", "i":18},
    {"name": "Shock Wave", "i":19},
    {"name": "Fury", "i":20},
    {"name": "Raven", "i":21},
    {"name": "Poison Creeper", "i":22},
    {"name": "Heart of Wolverine", "i":23},
    {"name": "Summon Spirit Wolf", "i":24},
    {"name": "Carrion Vine", "i":25},
    {"name": "Oak Sage", "i":26},
    {"name": "Summon Dire Wolf", "i":27},
    {"name": "Solar Creeper", "i":28},
    {"name": "Spirit of Barbs", "i":29},
]
skills_necromancer = [
    {"name": "Summon Mastery", "i":0},
    {"name": "Raise Skeleton Warrior", "i":1},
    {"name": "Bone Offering", "i":2},
    {"name": "Clay Golem", "i":3},
    {"name": "Flesh Offering", "i":4},
    {"name": "Raise Skeletal Mage", "i":5},
    {"name": "Blood Golem", "i":6},
    {"name": "Convocation", "i":7},
    {"name": "Iron Golem", "i":8},
    {"name": "Fire Golem", "i":9},
    {"name": "Revive", "i":10},
    {"name": "Deadly Poison", "i":11},
    {"name": "Teeth", "i":12},
    {"name": "Bone Armor", "i":13},
    {"name": "Corpse Explosion", "i":14},
    {"name": "Desecrate", "i":15},
    {"name": "Bone Spear", "i":16},
    {"name": "Bone Wall", "i":17},
    {"name": "Bone Spirit", "i":18},
    {"name": "Poison Nova", "i":19},
    {"name": "Amplify Damage", "i":20},
    {"name": "Dim Vision", "i":21},
    {"name": "Hemorrhage", "i":22},
    {"name": "Weaken", "i":23},
    {"name": "Iron Maiden", "i":24},
    {"name": "Terror", "i":25},
    {"name": "Confuse", "i":26},
    {"name": "Life Tap", "i":27},
    {"name": "Attract", "i":28},
    {"name": "Decrepify", "i":29},
    {"name": "Lower Resist", "i":30},
]
skills_paladin = [
    {"name": "Prayer", "i":0},
    {"name": "Resist Fire", "i":1},
    {"name": "Defiance", "i":2},
    {"name": "Resist Cold", "i":3},
    {"name": "Cleansing", "i":4},
    {"name": "Resist Lightning", "i":5},
    {"name": "Vigor", "i":6},
    {"name": "Meditation", "i":7},
    {"name": "Redemption", "i":8},
    {"name": "Salvation", "i":9},
    {"name": "Might", "i":10},
    {"name": "Holy Fire", "i":11},
    {"name": "Precision", "i":12},
    {"name": "Blessed Aim", "i":13},
    {"name": "Concentration", "i":14},
    {"name": "Holy Freeze", "i":15},
    {"name": "Holy Shock", "i":16},
    {"name": "Sanctuary", "i":17},
    {"name": "Fanaticism", "i":18},
    {"name": "Conviction", "i":19},
    {"name": "Sacrifice", "i":20},
    {"name": "Smite", "i":21},
    {"name": "Holy Bolt", "i":22},
    {"name": "Zeal", "i":23},
    {"name": "Charge", "i":24},
    {"name": "Vengeance", "i":25},
    {"name": "Blessed Hammer", "i":26},
    {"name": "Conversion", "i":27},
    {"name": "Holy Shield", "i":28},
    {"name": "Fist of the Heavens", "i":29},
    {"name": "Dashing Strike", "i":30},
]
skills_sorceress = [
    {"name": "Ice Bolt", "i":0},
    {"name": "Frigerate", "i":1},
    {"name": "Frost Nova", "i":2},
    {"name": "Ice Blast", "i":3},
    {"name": "Shiver Armor", "i":4},
    {"name": "Glacial Spike", "i":5},
    {"name": "Blizzard", "i":6},
    {"name": "Freezing Pulse", "i":7},
    {"name": "Chilling Armor", "i":8},
    {"name": "Frozen Orb", "i":9},
    {"name": "Cold Mastery", "i":10},
    {"name": "Charged Bolt", "i":11},
    {"name": "Static Field", "i":12},
    {"name": "Telekinesis", "i":13},
    {"name": "Nova", "i":14},
    {"name": "Lightning Surge", "i":15},
    {"name": "Chain Lightning", "i":16},
    {"name": "Teleport", "i":17},
    {"name": "Discharge", "i":18},
    {"name": "Energy Shield", "i":19},
    {"name": "Lightning Mastery", "i":20},
    {"name": "Thunder Storm", "i":21},
    {"name": "Fire Bolt", "i":22},
    {"name": "Warmth", "i":23},
    {"name": "Inferno", "i":24},
    {"name": "Immolate", "i":25},
    {"name": "Fire Ball", "i":26},
    {"name": "Fire Wall", "i":27},
    {"name": "Enflame", "i":28},
    {"name": "Meteor", "i":29},
    {"name": "Fire Mastery", "i":30},
    {"name": "Hydra", "i":31},
]


# Class -> skills map
skill_definitions = {
    "amazon": skills_amazon,
    "assassin": skills_assassin,
    "barbarian": skills_barbarian,
    "druid": skills_druid,
    "necromancer": skills_necromancer,
    "paladin": skills_paladin,
    "sorceress": skills_sorceress,
}


# --- build encoded skills string ---
def build_skills_string(character_class, character_skills):
    defs = skill_definitions.get(character_class.lower())
    if defs is None or not defs:
        raise ValueError(f"No skill definitions found for class {character_class}")

    skills = []
    for skill in sorted(defs, key=lambda s: s["i"]):
        points = character_skills.get(skill["name"], 0)
        skills.append(f"{points:02d}")  # always 2 digits
    return "".join(skills)


# --- URL BUILDER (real implementation) ---
from urllib.parse import urlencode

EQUIP_MAPPING = {
    "helmet": "helm",
    "body": "armor",
    "gloves": "gloves",
    "boots": "boots",
    "belt": "belt",
    "amulet": "amulet",
    "ring1": "ring1",
    "ring2": "ring2",
    "weapon1": "weapon",   # main hand
    "weapon2": "offhand",  # offhand
    # we ignore sweapon1 and sweapon2 entirely
}

EQUIP_ORDER = [
    "helm",
    "armor",
    "gloves",
    "boots",
    "belt",
    "amulet",
    "ring1",
    "ring2",
    "weapon",
    "offhand",
]

from urllib.parse import quote_plus

# Gem name fragments in Path of Diablo
GEM_KEYWORDS = [
    "Chipped", "Flawed", "Normal", "Flawless", "Perfect"
]
GEM_TYPES = [
    "Amethyst", "Topaz", "Ruby", "Sapphire",
    "Emerald", "Diamond", "Skull"
]

def is_socket_rune_or_gem(socket_item):
    """Return True if this socket item is a Rune or Gem."""
    title = socket_item.get("Title", "")
    qcode = socket_item.get("QualityCode", "")
    
    # Runes → check quality code
    if qcode == "q_rune" or "Rune" in title:
        return True
    
    # Gems → empty qualitycode, match gem words
    if qcode == "" and any(pref in title for pref in GEM_KEYWORDS) and any(t in title for t in GEM_TYPES):
        return True
    
    return False


import re
from urllib.parse import quote_plus

def pretty_slot_label(slot):
    """
    Turn a json-worn or URL slot key into a user-friendly label used in item names.
    Accepts inputs like: 'helmet', 'helm', 'body', 'ring1', 'weapon1', 'weapon2', 'offhand', ...
    Returns: 'Helm', 'Armor', 'Ring', 'Weapon', 'Offhand', etc.
    """
    if not slot:
        return ""

    s = str(slot).lower()

    mapping = {
        # URL keys
        "helm": "Helm", "armor": "Armor", "gloves": "Gloves", "boots": "Boots",
        "belt": "Belt", "amulet": "Amulet", "ring1": "Ring", "ring2": "Ring",
        "weapon": "Weapon", "offhand": "Offhand",

        # JSON worn names
        "helmet": "Helm", "body": "Armor", "gloves": "Gloves", "boots": "Boots",
        "belt": "Belt", "amulet": "Amulet", "ring": "Ring", "ring1": "Ring", "ring2": "Ring",
        "weapon1": "Weapon", "weapon2": "Offhand", "sweapon1": "Weapon (swap)", "sweapon2": "Offhand (swap)",
    }

    if s in mapping:
        return mapping[s]

    # Fallback: drop trailing digits and underscores and title-case
    s2 = re.sub(r'\d+$', '', s)            # remove trailing digits like "1" or "2"
    s2 = s2.replace('_', ' ').strip()
    return s2.title()

def format_equipment_item(item, slot):
    """Format a single equipped item for planner URL with correct rules."""
    quality = item.get("QualityCode", "")
    title = item.get("Title", "") or ""
    worn = item.get("Worn", "")  # original JSON field (e.g. "ring1", "weapon1")
    tag = item.get("Tag", "")

    # Prefer the canonical URL slot label if provided; otherwise use the JSON 'worn'.
    # `slot` should be the target key in the URL (e.g. "helm", "armor", "weapon", "offhand", "ring1", "ring2")
    display_label = pretty_slot_label(slot or worn)

    # Base name rules (use display_label instead of raw worn)
    if quality in ("q_unique", "q_set"):
        name = title
    elif quality == "q_magic":
        name = f"Imported magic {display_label}"
    elif quality == "q_rare":
        name = f"Imported rare {display_label}"
    elif quality == "q_crafted":
        name = f"Imported crafted {display_label}"
    elif quality == "q_runeword":
        # Runeword wants "<Runeword> ­ ­ - ­ ­ <Base Item>"
        # Keeps the special separators the planner uses (soft-hyphen style)
        name = f"{title} ­ ­ - ­ ­ {tag}"
    else:
        name = title if title else f"Imported {display_label}"

    parts = [name]

    # (Keep your existing socket/runeword handling — unchanged)
    if quality in ("q_unique", "q_set"):
        socket_count = int(item.get("SocketCount", 0) or 0)
        socket_field = "+ Sockets" if socket_count > 0 else "none"
        parts.append(str(socket_count))
        parts.append(socket_field)

        # Only include runes/gems from sockets (you already have logic for that)
        for s in item.get("Sockets", []):
            if is_socket_rune_or_gem(s):   # reuse the helper you implemented earlier
                parts.append(s.get("Title", ""))
    elif quality == "q_runeword":
        socket_count = int(item.get("SocketCount", 0) or 0)
        parts.append(str(socket_count))
        parts.append("none")
        # pad to planner expectation (you used 6 earlier for 8 total fields after the first 3)
        parts.extend([""] * 6)
    else:
        # other qualities show "0,none"
        parts.extend(["0", "none"])

    return f"{slot}={quote_plus(','.join(parts))}"


def build_equipment_url(equipped_items):
    """Build equipment string from equipped items in fixed order."""
    slot_map = {}
    for item in equipped_items:
        worn = item.get("Worn")
        mapped = EQUIP_MAPPING.get(worn, worn)  # translate JSON -> planner slot
        if mapped in EQUIP_ORDER:
            slot_map[mapped] = item

    segments = []
    for slot in EQUIP_ORDER:
        item = slot_map.get(slot)
        if item:
            segments.append(format_equipment_item(item, slot))
    return "&".join(segments)


def build_final_url(character, settings=SETTINGS, game_version=GAME_VERSION, base_path=BASE_IMPORT_PATH):
    class_name = character["Class"].lower()
    level = character["Stats"]["Level"]

    # Flatten SkillTabs into {name: level}
    skill_points = {}
    for tab in character.get("SkillTabs", []):
        for s in tab.get("Skills", []):
            skill_points[s["Name"]] = s.get("Level", 0)

    # Build skills string
    skills_str = build_skills_string(class_name, skill_points)

    # Core params
    params = {
        "class": class_name,
        "level": level,
        "difficulty": 3,
        "quests": 1,
        "strength": character["Stats"].get("Strength", 0),
        "dexterity": character["Stats"].get("Dexterity", 0),
        "vitality": character["Stats"].get("Vitality", 0),
        "energy": character["Stats"].get("Energy", 0),
        "url": 1,
        "coupling": 0,
        "synthwep": 0,
        "running": 0,
        "autocast": 0,
        "skills": skills_str,
        "selected": "none,none",
    }

    # Encode params
    core_url = f"{base_path}?{urlencode(params, doseq=True)}"

    # Equipment
    equipped = character.get("Equipped", [])
    eq_str = build_equipment_url(equipped)
    if eq_str:
        return f"{core_url}&{eq_str}"
    return core_url

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
#    DateTime_in_ISOFormat = datetime.datetime.now()
#    today = DateTime_in_ISOFormat.isoformat("#", "hours")
#    today = datetime.date.today().isoformat()  # e.g. "2025-09-11"
#    today = datetime.datetime.now().isoformat()  # e.g. "2025-09-11"
    now = datetime.datetime.now()
    today = now.strftime("%Y-%m-%dT%H")    
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
