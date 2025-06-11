function checkShorturl() {
    if (params.has('import') == true) { 
        const url = window.location.href;
        const query = url.split('?')[1]; // "import=sorcsallsuck"
        // Split the query into key-value pairs
        const queryParams = query.split('&'); // ["import=sorcsallsuck"]
        // Find the "import" parameter and extract its value
        let characterName = '';
        queryParams.forEach(param => {
            const [key, value] = param.split('='); // ["import", "sorcsallsuck"]
                if (key === 'import') {
                    characterName = value;
                }
        });
        importChar(characterName) 
    } ; 
    if (params.has('qql211')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&url=1&class=druid&level=1&difficulty=3&quests=0&running=0&strength=0&dexterity=0&vitality=0&energy=0&coupling=1&synthwep=0&autocast=1&skills=00000000000000000000000000000000000000000000000000000000000000&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2C+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+2&helm=none%2C0%2Cnone%2C%2C%2C&armor=none%2C0%2Cnone%2C%2C%2C%2C&gloves=none%2C0%2Cnone&boots=none%2C0%2Cnone&belt=none%2C0%2Cnone&amulet=none%2C0%2Cnone&ring1=none%2C0%2Cnone&ring2=none%2C0%2Cnone&weapon=none%2C0%2Cnone%2C%2C%2C%2C%2C%2C&offhand=none%2C0%2Cnone%2C%2C%2C%2C%2C%2C&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone"; }
if (params.has('qql212')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql213')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql214')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql215')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql216')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql217')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
if (params.has('qql218')) { window.location.href = "https://qordwasalreadytaken.github.io/path-of-diablo-planner/index.html?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2C%2CHel+Rune&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"; }
// Shortlink example: https://build.pathofdiablo.com/?qql3
    // Javazon
    if (params.has('qql1') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=amazon&level=91&difficulty=3&quests=1&running=0&strength=0&dexterity=30&vitality=425&energy=10&url=1&coupling=1&synthwep=0&autocast=1&skills=011101002020010020200101010101010100000100000000000000000000&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2C+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+2&helm=Griffon%27s+Eye%2C3%2Cnone%2C%2C%2C&armor=Enigma+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Archon+Plate%2C3%2Cnone%2C%2C%2C%2C&gloves=Lancer%27s+Mitts+of+Alacrity%2C3%2Cnone&boots=Silkweave%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Highlord%27s+Wrath%2C0%2Cnone&ring1=The+Stone+of+Jordan%2C0%2Cnone&ring2=Wisp+Projector%2C0%2Cnone&weapon=Titan%27s+Revenge%2C2%2Cnone%2C%2C%2C%2C%2C%2C&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Inner_Sight%2C1%2C0&effect=Lethal_Strike%2C1%2C0&effect=Phase_Run%2C1%2C0&effect=Dodge%2C1%2C0&effect=Avoid%2C1%2C0&effect=Penetrate%2C1%2C0&effect=Evade%2C1%2C0&effect=Pierce%2C1%2C0&effect=Lifted_Spirit-ring2%2C1%2C0&effect=Heart_of_Wolverine-ring2%2C1%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=Annihilus&charm=Hellfire+Torch&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm&charm=%2B1+Harpoonist%27s+Grand+Charm"} ;
    // Hemo Necro
    if (params.has('qql2') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=necromancer&level=85&difficulty=3&quests=1&running=0&strength=0&dexterity=0&vitality=0&energy=0&url=1&coupling=1&synthwep=0&autocast=1&skills=01010001000101010101010000000000000000000101202020010120010101&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CHemorrhage&helm=Harlequin+Crest+%28Shako%29%2C3%2Cnone%2C%2C%2C&armor=Chains+of+Honor+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Archon+Plate%2C3%2Cnone%2C%2C%2C%2C&gloves=Magefist%2C1%2Cnone&boots=Waterwalk%2C2%2Cnone&belt=Arachnid+Mesh%2C3%2Cnone&amulet=Mara%27s+Kaleidoscope%2C0%2Cnone&ring1=The+Stone+of+Jordan%2C0%2Cnone&ring2=The+Stone+of+Jordan%2C0%2Cnone&weapon=Hemo+Wand%2C1%2Cnone%2C%2C%2C%2C%2C%2C&offhand=Brimstone+Shell+Unraveller+Head%2C1%2Cnone%2C%2C%2C%2C%2C%2C&effect=Blood_Golem%2C1%2C0&effect=Iron_Golem%2C0%2C0&effect=Venom-belt%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=Annihilus&charm=Hellfire+Torch&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm"} ;
//    if (params.has('qql3') == true) { window.location.href = ""} ;
    // Hemo Necro
    if (params.has('qql4') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=necromancer&level=95&difficulty=3&quests=1&running=0&strength=36&dexterity=0&vitality=449&energy=0&url=1&coupling=1&synthwep=0&autocast=1&skills=00000000000000010000000000000000000000000101202020000020000101&selected=Hemorrhage%2C+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+2&helm=Harlequin+Crest+%28Shako%29%2C3%2C%2B+Sockets%2C%2CTir+Rune%2CTir+Rune&armor=Enigma+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Archon+Plate%2C3%2Cnone%2C%2C%2C%2C&gloves=Trang-Oul%27s+Claws%2C2%2Cnone&boots=Silkweave%2C2%2Cnone&belt=Arachnid+Mesh%2C3%2Cnone&amulet=Caster+Amulet%2C0%2C%2B+All+Skills&ring1=The+Stone+of+Jordan%2C0%2Cnone&ring2=The+Stone+of+Jordan%2C0%2Cnone&weapon=Hemo+Wand%2C1%2C%2B+Sockets%2C%2C%2C%2C%2C%2CTir+Rune&offhand=Homunculus%2C2%2Cnone%2C%2C%2C%2C%2C%2C&effect=Venom-belt%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=Annihilus&charm=Hellfire+Torch&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Fungal+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=%2B1+Hexing+Grand+Charm&charm=Fine+Small+Charm+of+Balance&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita&charm=Fine+Small+Charm+of+Vita"}
    // Singer barb
    if (params.has('qql5') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=barbarian&level=99&difficulty=3&quests=1&running=0&strength=0&dexterity=0&vitality=0&energy=0&url=1&coupling=1&autocast=1&skills=01012001012012202010000000000100010100000100000000000000000000&synthwep=0&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2C+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+2&helm=Vanguard%27s+Diadem%2C3%2Cnone%2C%2C%2C&armor=Enigma+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Archon+Plate%2C3%2Cnone%2C%2C%2C%2C&gloves=Magefist%2C1%2Cnone&boots=Silkweave%2C2%2Cnone&belt=Arachnid+Mesh%2C3%2Cnone&amulet=Caster+Amulet%2C0%2C%2B+All+Skills&ring1=Caster+Ring%2C0%2C%2B+Faster+Cast+Rate&ring2=Caster+Ring%2C0%2C%2B+Faster+Cast+Rate&weapon=Heart+of+the+Oak+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Flail%2C1%2Cnone%2C%2C%2C%2C%2C%2C&offhand=Heart+of+the+Oak+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Flail%2C1%2Cnone%2C%2C%2C%2C%2C%2C&effect=Shout%2C1%2C0&effect=Battle_Orders%2C1%2C0&effect=Grim_Ward%2C1%2C0&effect=Battle_Command%2C1%2C0&effect=Increased_Stamina%2C1%2C0&effect=Iron_Skin%2C1%2C0&effect=Increased_Speed%2C1%2C0&effect=Natural_Resistance%2C1%2C0&effect=Venom-belt%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=Annihilus&charm=Hellfire+Torch&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm&charm=%2B1+Sounding+Grand+Charm"}
    //Aramex's Fend Zon
    if (params.has('qql6') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=amazon&level=93&difficulty=3&quests=1&running=0&strength=154&dexterity=81&vitality=240&energy=0&url=1&coupling=1&autocast=1&skills=010000200000002000001504010707010701200000000000000000000000&synthwep=0&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFend&helm=Crown+of+Ages%2C3%2Cnone%2C%2C%2C&armor=The+Gladiator%27s+Bane%2C3%2C%2B+Sockets%2CUm+Rune%2CUm+Rune%2CUm+Rune%2CUm+Rune&gloves=Steelrend%2C3%2Cnone&boots=Immortal+King%27s+Pillar%2C2%2Cnone&belt=String+of+Ears%2C2%2C%2B+Increased+Attack+Speed&amulet=Atma%27s+Scarab%2C0%2C%2B+All+Skills&ring1=Nature%27s+Peace%2C0%2Cnone&ring2=Dwarf+Star%2C0%2Cnone&weapon=Steel+Pillar%2C3%2C%2B+Sockets%2C%2CRuby+Jewel+of+Fervor%2CRuby+Jewel+of+Fervor%2CRuby+Jewel+of+Fervor%2CRuby+Jewel+of+Fervor%2CRuby+Jewel+of+Fervor&offhand=none%2C0%2Cnone%2C%2C%2C%2C%2C%2C&effect=Inner_Sight%2C1%2C0&effect=Lethal_Strike%2C1%2C0&effect=Phase_Run%2C1%2C0&effect=Dodge%2C1%2C0&effect=Avoid%2C1%2C0&effect=Penetrate%2C1%2C0&effect=Evade%2C1%2C0&effect=Oak_Sage-ring1%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=Annihilus&charm=Hellfire+Torch&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita&charm=Sharp+Grand+Charm+of+Vita"}
//  Qord's chance to cast Nova sorc
    if (params.has('qql7') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&url=1&class=sorceress&level=90&difficulty=3&quests=1&running=0&strength=0&dexterity=0&vitality=0&energy=0&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010120200101011420200000020000000000000000&selected=Frost+Nova%2CNova&helm=Crown+of+Ages%2C3%2Cnone%2C%2CBer+Rune%2CBer+Rune&armor=The+Gladiator%27s+Bane%2C3%2C%2B+Sockets%2CPerfect+Skull%2CPerfect+Skull%2CMal+Rune%2CMal+Rune&gloves=Dracul%27s+Grasp%2C3%2C%2B+All+Resistances&boots=Hitpower+Boots%2C3%2C%2B+All+Resistances&belt=Hitpower+Belt%2C3%2C%2B+Faster+Cast+Rate&amulet=Hitpower+Amulet%2C0%2C%2B+All+Skills&ring1=Hitpower+Ring%2C0%2C%2B+Damage+Reduction&ring2=Hitpower+Ring%2C0%2C%2B+Damage+Reduction&weapon=The+Iron+Jang+Bong%2C1%2C%2B+Sockets%2CRainbow+Facet+%28Lightning%29%2CRainbow+Facet+%28Lightning%29%2CRainbow+Facet+%28Lightning%29%2CRainbow+Facet+%28Lightning%29%2CRainbow+Facet+%28Lightning%29%2CRainbow+Facet+%28Lightning%29&offhand=none%2C0%2Cnone%2C%2C%2C%2C%2C%2C&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Prayer-mercenary%2C1%2C0&effect=Meditation-mercenary_weapon%2C1%2C0&effect=Warmth%2C1%2C0&mercenary=Desert+Guard+%C2%AD+%C2%AD+%C2%AD+%C2%AD+%28Prayer%29%2Cnone%2Cnone%2CInsight+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Partizan%2Cnone&charm=Mang+Song%2FES+Plague+on+Swap&charm=Annihilus&charm=Hellfire+Torch&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita&charm=%2B1+Sparking+Grand+Charm+of+Vita"}
    //	if (params.has('qql8') == true) { window.location.href = ""}
    //	if (params.has('qql9') == true) { window.location.href = ""}
    //	if (params.has('qql10') == true) { window.location.href = ""}
    //	if (params.has('qql11') == true) { window.location.href = ""}
    //	if (params.has('qql12') == true) { window.location.href = ""}
    //	if (params.has('qql13') == true) { window.location.href = ""}
    //	if (params.has('qql14') == true) { window.location.href = ""}
    //	if (params.has('qql15') == true) { window.location.href = ""}
    //	if (params.has('qql16') == true) { window.location.href = ""}
    //	if (params.has('qql17') == true) { window.location.href = ""}
    //	if (params.has('qql18') == true) { window.location.href = ""}
    //	if (params.has('qql19') == true) { window.location.href = ""}
    //	if (params.has('qql20') == true) { window.location.href = ""}
    //	if (params.has('qql21') == true) { window.location.href = ""}
    //	if (params.has('qql22') == true) { window.location.href = ""}
    //	if (params.has('qql23') == true) { window.location.href = ""}
    //	if (params.has('qql24') == true) { window.location.href = ""}
    //	if (params.has('qql25') == true) { window.location.href = ""}
    //	if (params.has('qql26') == true) { window.location.href = ""}
    //	if (params.has('qql27') == true) { window.location.href = ""}
    //	if (params.has('qql28') == true) { window.location.href = ""}
    //	if (params.has('qql29') == true) { window.location.href = ""}
    //	if (params.has('qql30') == true) { window.location.href = ""}
    //	if (params.has('qql31') == true) { window.location.href = ""}
    //	if (params.has('qql32') == true) { window.location.href = ""}
    //	if (params.has('qql33') == true) { window.location.href = ""}
    //	if (params.has('qql34') == true) { window.location.href = ""}
    //	if (params.has('qql35') == true) { window.location.href = ""}
    //	if (params.has('qql36') == true) { window.location.href = ""}
    //	if (params.has('qql37') == true) { window.location.href = ""}
    //	if (params.has('qql38') == true) { window.location.href = ""}
    //	if (params.has('qql39') == true) { window.location.href = ""}
    //	if (params.has('qql40') == true) { window.location.href = ""}
    //	if (params.has('qql41') == true) { window.location.href = ""}
    //	if (params.has('qql42') == true) { window.location.href = ""}
    //	if (params.has('qql43') == true) { window.location.href = ""}
    //	if (params.has('qql44') == true) { window.location.href = ""}
    //	if (params.has('qql45') == true) { window.location.href = ""}
    //	if (params.has('qql46') == true) { window.location.href = ""}
    //	if (params.has('qql47') == true) { window.location.href = ""}
    //	if (params.has('qql48') == true) { window.location.href = ""}
    //	if (params.has('qql49') == true) { window.location.href = ""}
    //	if (params.has('qql50') == true) { window.location.href = ""}
    //	if (params.has('qql51') == true) { window.location.href = ""}
    //	if (params.has('qql52') == true) { window.location.href = ""}
    //	if (params.has('qql53') == true) { window.location.href = ""}
    //	if (params.has('qql54') == true) { window.location.href = ""}
    //	if (params.has('qql55') == true) { window.location.href = ""}
    //	if (params.has('qql56') == true) { window.location.href = ""}
    //	if (params.has('qql57') == true) { window.location.href = ""}
    //	if (params.has('qql58') == true) { window.location.href = ""}
    //	if (params.has('qql59') == true) { window.location.href = ""}
    //	if (params.has('qql60') == true) { window.location.href = ""}
    //	if (params.has('qql61') == true) { window.location.href = ""}
    //	if (params.has('qql62') == true) { window.location.href = ""}
    //	if (params.has('qql63') == true) { window.location.href = ""}
    //	if (params.has('qql64') == true) { window.location.href = ""}
    //	if (params.has('qql65') == true) { window.location.href = ""}
    //	if (params.has('qql66') == true) { window.location.href = ""}
    //	if (params.has('qql67') == true) { window.location.href = ""}
    //	if (params.has('qql68') == true) { window.location.href = ""}
    //Qords Dangoon sorc
    if (params.has('qql69') == true) { window.location.href = "https://build.pathofdiablo.com/?v=2&class=sorceress&level=91&difficulty=3&quests=1&running=0&strength=126&dexterity=50&vitality=60&energy=200&url=1&coupling=1&synthwep=0&autocast=1&skills=0000000000000000000000010020000101010007200001120000010020000600&selected=+%C2%AD+%C2%AD+%C2%AD+%C2%AD+Skill+1%2CFire+Bolt&helm=Delirium+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Diadem%2C3%2Cnone%2C%2C%2C&armor=Treachery+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Wyrmhide%2C3%2Cnone%2C%2C%2C%2C&gloves=Sander%27s+Taboo%2C1%2Cnone&boots=Infernostride%2C2%2Cnone&belt=Thundergod%27s+Vigor%2C2%2Cnone&amulet=Angelic+Wings%2C0%2Cnone&ring1=Angelic+Halo%2C0%2Cnone&ring2=Raven+Frost%2C0%2Cnone&weapon=Dangoon%27s+Teaching%2C3%2C%2B+Sockets%2C%2C%2C%2C%2CHel+Rune%2CBrute%27s+Jewel+of+Fervor&offhand=Phoenix+%C2%AD+%C2%AD+-+%C2%AD+%C2%AD+Monarch%2C3%2Cnone%2C%2C%2C%2C%2C%2C&effect=Fade-armor%2C1%2C0&effect=Venom-armor%2C1%2C0&effect=Blaze-boots%2C0%2C0&effect=Redemption-offhand%2C1%2C0&effect=Blaze-offhand%2C1%2C0&effect=Energy_Shield%2C1%2C0&effect=Lightning_Mastery%2C1%2C0&effect=Warmth%2C1%2C0&effect=Enflame%2C1%2C0&effect=Fire_Mastery%2C1%2C0&mercenary=none%2Cnone%2Cnone%2Cnone%2Cnone&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Sparking+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=%2B1+Burning+Grand+Charm&charm=Mang+Song%2FES+Plague+on+Swap&charm=%2B1+Sparking+Grand+Charm"}
    //	if (params.has('qql70') == true) { window.location.href = ""}
    //	if (params.has('qql71') == true) { window.location.href = ""}
    //	if (params.has('qql72') == true) { window.location.href = ""}
    //	if (params.has('qql73') == true) { window.location.href = ""}
    //	if (params.has('qql74') == true) { window.location.href = ""}
    //	if (params.has('qql75') == true) { window.location.href = ""}
    //	if (params.has('qql76') == true) { window.location.href = ""}
    //	if (params.has('qql77') == true) { window.location.href = ""}
    //	if (params.has('qql78') == true) { window.location.href = ""}
    //	if (params.has('qql79') == true) { window.location.href = ""}
    //	if (params.has('qql80') == true) { window.location.href = ""}
    //	if (params.has('qql81') == true) { window.location.href = ""}
    //	if (params.has('qql82') == true) { window.location.href = ""}
    //	if (params.has('qql83') == true) { window.location.href = ""}
    //	if (params.has('qql84') == true) { window.location.href = ""}
    //	if (params.has('qql85') == true) { window.location.href = ""}
    //	if (params.has('qql86') == true) { window.location.href = ""}
    //	if (params.has('qql87') == true) { window.location.href = ""}
    //	if (params.has('qql88') == true) { window.location.href = ""}
    //	if (params.has('qql89') == true) { window.location.href = ""}
    //	if (params.has('qql90') == true) { window.location.href = ""}
    //	if (params.has('qql91') == true) { window.location.href = ""}
    //	if (params.has('qql92') == true) { window.location.href = ""}
    //	if (params.has('qql93') == true) { window.location.href = ""}
    //	if (params.has('qql94') == true) { window.location.href = ""}
    //	if (params.has('qql95') == true) { window.location.href = ""}
    //	if (params.has('qql96') == true) { window.location.href = ""}
    //	if (params.has('qql97') == true) { window.location.href = ""}
    //	if (params.has('qql98') == true) { window.location.href = ""}
    //	if (params.has('qql99') == true) { window.location.href = ""}
    //	if (params.has('qql100') == true) { window.location.href = ""}
    //	if (params.has('qql101') == true) { window.location.href = ""}
    //	if (params.has('qql102') == true) { window.location.href = ""}
    //	if (params.has('qql103') == true) { window.location.href = ""}
    //	if (params.has('qql104') == true) { window.location.href = ""}
    //	if (params.has('qql105') == true) { window.location.href = ""}
    //	if (params.has('qql106') == true) { window.location.href = ""}
    //	if (params.has('qql107') == true) { window.location.href = ""}
    //	if (params.has('qql108') == true) { window.location.href = ""}
    //	if (params.has('qql109') == true) { window.location.href = ""}
    //	if (params.has('qql110') == true) { window.location.href = ""}
    //	if (params.has('qql111') == true) { window.location.href = ""}
    //	if (params.has('qql112') == true) { window.location.href = ""}
    //	if (params.has('qql113') == true) { window.location.href = ""}
    //	if (params.has('qql114') == true) { window.location.href = ""}
    //	if (params.has('qql115') == true) { window.location.href = ""}
    //	if (params.has('qql116') == true) { window.location.href = ""}
    //	if (params.has('qql117') == true) { window.location.href = ""}
    //	if (params.has('qql118') == true) { window.location.href = ""}
    //	if (params.has('qql119') == true) { window.location.href = ""}
    //	if (params.has('qql120') == true) { window.location.href = ""}
    //	if (params.has('qql121') == true) { window.location.href = ""}
    //	if (params.has('qql122') == true) { window.location.href = ""}
    //	if (params.has('qql123') == true) { window.location.href = ""}
    //	if (params.has('qql124') == true) { window.location.href = ""}
    //	if (params.has('qql125') == true) { window.location.href = ""}
    //	if (params.has('qql126') == true) { window.location.href = ""}
    //	if (params.has('qql127') == true) { window.location.href = ""}
    //	if (params.has('qql128') == true) { window.location.href = ""}
    //	if (params.has('qql129') == true) { window.location.href = ""}
    //	if (params.has('qql130') == true) { window.location.href = ""}
    //	if (params.has('qql131') == true) { window.location.href = ""}
    //	if (params.has('qql132') == true) { window.location.href = ""}
    //	if (params.has('qql133') == true) { window.location.href = ""}
    //	if (params.has('qql134') == true) { window.location.href = ""}
    //	if (params.has('qql135') == true) { window.location.href = ""}
    //	if (params.has('qql136') == true) { window.location.href = ""}
    //	if (params.has('qql137') == true) { window.location.href = ""}
    //	if (params.has('qql138') == true) { window.location.href = ""}
    //	if (params.has('qql139') == true) { window.location.href = ""}
    //	if (params.has('qql140') == true) { window.location.href = ""}
    //	if (params.has('qql141') == true) { window.location.href = ""}
    //	if (params.has('qql142') == true) { window.location.href = ""}
    //	if (params.has('qql143') == true) { window.location.href = ""}
    //	if (params.has('qql144') == true) { window.location.href = ""}
    //	if (params.has('qql145') == true) { window.location.href = ""}
    //	if (params.has('qql146') == true) { window.location.href = ""}
    //	if (params.has('qql147') == true) { window.location.href = ""}
    //	if (params.has('qql148') == true) { window.location.href = ""}
    //	if (params.has('qql149') == true) { window.location.href = ""}
    //	if (params.has('qql150') == true) { window.location.href = ""}
    //	if (params.has('qql151') == true) { window.location.href = ""}
    //	if (params.has('qql152') == true) { window.location.href = ""}
    //	if (params.has('qql153') == true) { window.location.href = ""}
    //	if (params.has('qql154') == true) { window.location.href = ""}
    //	if (params.has('qql155') == true) { window.location.href = ""}
    //	if (params.has('qql156') == true) { window.location.href = ""}
    //	if (params.has('qql157') == true) { window.location.href = ""}
    //	if (params.has('qql158') == true) { window.location.href = ""}
    //	if (params.has('qql159') == true) { window.location.href = ""}
    //	if (params.has('qql160') == true) { window.location.href = ""}
    //	if (params.has('qql161') == true) { window.location.href = ""}
    //	if (params.has('qql162') == true) { window.location.href = ""}
    //	if (params.has('qql163') == true) { window.location.href = ""}
    //	if (params.has('qql164') == true) { window.location.href = ""}
    //	if (params.has('qql165') == true) { window.location.href = ""}
    //	if (params.has('qql166') == true) { window.location.href = ""}
    //	if (params.has('qql167') == true) { window.location.href = ""}
    //	if (params.has('qql168') == true) { window.location.href = ""}
    //	if (params.has('qql169') == true) { window.location.href = ""}
    //	if (params.has('qql170') == true) { window.location.href = ""}
    //	if (params.has('qql171') == true) { window.location.href = ""}
    //	if (params.has('qql172') == true) { window.location.href = ""}
    //	if (params.has('qql173') == true) { window.location.href = ""}
    //	if (params.has('qql174') == true) { window.location.href = ""}
    //	if (params.has('qql175') == true) { window.location.href = ""}
    //	if (params.has('qql176') == true) { window.location.href = ""}
    //	if (params.has('qql177') == true) { window.location.href = ""}
    //	if (params.has('qql178') == true) { window.location.href = ""}
    //	if (params.has('qql179') == true) { window.location.href = ""}
    //	if (params.has('qql180') == true) { window.location.href = ""}
    //	if (params.has('qql181') == true) { window.location.href = ""}
    //	if (params.has('qql182') == true) { window.location.href = ""}
    //	if (params.has('qql183') == true) { window.location.href = ""}
    //	if (params.has('qql184') == true) { window.location.href = ""}
    //	if (params.has('qql185') == true) { window.location.href = ""}
    //	if (params.has('qql186') == true) { window.location.href = ""}
    //	if (params.has('qql187') == true) { window.location.href = ""}
    //	if (params.has('qql188') == true) { window.location.href = ""}
    //	if (params.has('qql189') == true) { window.location.href = ""}
    //	if (params.has('qql190') == true) { window.location.href = ""}
    //	if (params.has('qql191') == true) { window.location.href = ""}
    //	if (params.has('qql192') == true) { window.location.href = ""}
    //	if (params.has('qql193') == true) { window.location.href = ""}
    //	if (params.has('qql194') == true) { window.location.href = ""}
    //	if (params.has('qql195') == true) { window.location.href = ""}
    //	if (params.has('qql196') == true) { window.location.href = ""}
    //	if (params.has('qql197') == true) { window.location.href = ""}
    //	if (params.has('qql198') == true) { window.location.href = ""}
    //	if (params.has('qql199') == true) { window.location.href = ""}
    //	if (params.has('qql200') == true) { window.location.href = ""}
    //	if (params.has('qql201') == true) { window.location.href = ""}
    //	if (params.has('qql202') == true) { window.location.href = ""}
    //	if (params.has('qql203') == true) { window.location.href = ""}
    //	if (params.has('qql204') == true) { window.location.href = ""}
    //	if (params.has('qql205') == true) { window.location.href = ""}
    //	if (params.has('qql206') == true) { window.location.href = ""}
    //	if (params.has('qql207') == true) { window.location.href = ""}
    //	if (params.has('qql208') == true) { window.location.href = ""}
    //	if (params.has('qql209') == true) { window.location.href = ""}
    //	if (params.has('qql210') == true) { window.location.href = ""}
    
    
    }
        