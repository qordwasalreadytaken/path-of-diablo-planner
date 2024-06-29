
// TODO/TOCHECK: Does Fire Ball work as a synergy for Meteor (and vice versa) if both are oskills?

var character_any = {
	 
	// getSkillData - gets skill info from the appropriate skills data table
	//	skillName: name of skill
	//	lvl: level of the skill
	//	elem: which element of the skill to return
	// result: value of the skill element at the specified level
	// ---------------------------------
	getSkillData : function(skillName, lvl, elem) {
		var sk = "";
		var skill = "";
		var nameMod = "oskill_"+skillName.split(" ").join("_");
		var natClass = oskills_info[nameMod].native_class;
		if (natClass != "none") { sk = skills_all[natClass]; skill = sk[oskills_info[nameMod].i]; }
		
		var sk_Ball_Lightning = {data:{values:[
			["lightning min",10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
			["lightning max",30,44,58,72,86,100,125,150,175,200,236,272,308,344,380,427,474,521,568,615,662,720,778,836,894,952,1010,1068,1137,1206,1275,1344,1413,1482,1551,1620,1689,1758,1827,1896,1965,2034,2103,2172,2241,2310,2379,2448,2517,2586,2655,2724,2793,2862,2931,3000,3069,3138,3207,3276],
			["mana cost",2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,11,11.5,12,12.5,13,13.5,14,14.5,15,15.5,16,16.5,17,17.5,18,18.5,19,19.5,20,20.5,21,21.5,22,22.5,23,23.5,24,24.5,25,25.5,26,26.5,27,27.5,28,28.5,29,29.5,30,30.5,31,31.5,32]]}};
		if (skillName == "Ball Lightning") { skill = sk_Ball_Lightning }
 
//		var sk_Dangoon_Discharge_Proc = {data:{values:[
//			["lightning min",75,89,103,117,131,145,159,173,187,201,215,229,243,257,271,285,299,313,327,341,355,369,383,397,411,425,439,453,467,481,495,509,523,537,551,565,579,593,607,621,635,649,663,677,691,705,719,733,747,761,775,789,803,817,831,845,859,873,887,901], 
//			["lightning max",240,281,322,363,404,445,486,527,568,609,650,691,732,773,814,855,896,937,978,1019,1060,1101,1142,1183,1224,1265,1306,1347,1388,1429,1470,1511,1552,1593,1634,1675,1716,1757,1798,1839,1880,1921,1962,2003,2044,2085,2126,2167,2208,2249,2290,2331,2372,2413,2454,2495,2536,2577,2618,2659]]}};
//		if (skillName == "Dangoon Discharge Proc") { skill = sk_Dangoon_Discharge_Proc }
		var sk_CTC_Discharge_Proc = {data:{values:[
			["lightning min",75,89,103,117,131,145,159,173,187,201,215,229,243,257,271,285,299,313,327,341,355,369,383,397,411,425,439,453,467,481,495,509,523,537,551,565,579,593,607,621,635,649,663,677,691,705,719,733,747,761,775,789,803,817,831,845,859,873,887,901], 
			["lightning max",240,281,322,363,404,445,486,527,568,609,650,691,732,773,814,855,896,937,978,1019,1060,1101,1142,1183,1224,1265,1306,1347,1388,1429,1470,1511,1552,1593,1634,1675,1716,1757,1798,1839,1880,1921,1962,2003,2044,2085,2126,2167,2208,2249,2290,2331,2372,2413,2454,2495,2536,2577,2618,2659]]}};
		if (skillName == "CTC Discharge Proc") { skill = sk_CTC_Discharge_Proc }

//		var sk_DangoonChain_Proc = {data:{values:[
//			["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
//			["lightning max",160,200,240,280,320,360,400,440,488,536,584,632,680,728,776,824,880,936,992,1048,1104,1160,1224,1288,1352,1416,1480,1544,1616,1688,1760,1832,1904,1976,2048,2120,2192,2264,2336,2408,2480,2552,2624,2696,2768,2840,2912,2984,3056,3128,3200,3272,3344,3416,3488,3560,3632,3704,3776,3848]]}};
//		if (skillName == "DangoonChain Proc") { skill = sk_DangoonChain_Proc }
		var sk_CTC_Chain_Light_Proc = {data:{values:[
			["lightning min",1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 
			["lightning max",160,200,240,280,320,360,400,440,488,536,584,632,680,728,776,824,880,936,992,1048,1104,1160,1224,1288,1352,1416,1480,1544,1616,1688,1760,1832,1904,1976,2048,2120,2192,2264,2336,2408,2480,2552,2624,2696,2768,2840,2912,2984,3056,3128,3200,3272,3344,3416,3488,3560,3632,3704,3776,3848]]}};
		if (skillName == "CTC Chain Light Proc") { skill = sk_CTC_Chain_Light_Proc }

//		var sk_DestructionVolcano_Proc = {data:{values:[
//			["damage min",8,10,12,13,16,18,19,22,25,29,33,38,41,45,49,53,59,65,71,77,84,90,104,118,132,146,160,174,192,210,228,246,264,282,300,318,336,354,372,390,408,426,444,462,480,498,516,534,552,570,588,606,624,642,660,678,696,714,732,750,], 
//			["damage max",10,13,16,18,22,24,28,30,37,43,48,54,60,66,72,78,88,98,108,118,129,139,155,171,187,203,219,235,257,279,301,323,345,367,389,411,433,455,477,499,521,543,565,587,609,631,653,675,697,719,741,763,785,807,829,851,873,895,917,939,], 
//			["fire min",8,10,11,13,16,18,19,22,25,30,33,38,41,46,50,54,60,66,72,77,84,90,98,106,114,122,130,138,149,160,171,182,193,204,215,226,237,248,259,270,281,292,303,314,325,336,347,358,369,380,391,402,413,424,435,446,457,468,479,490,], 
//			["fire max",10,11,13,16,18,19,22,24,27,32,36,39,44,47,52,55,61,68,74,80,86,92,100,108,116,124,132,140,153,166,179,192,205,218,231,244,257,270,283,296,309,322,335,348,361,374,387,400,413,426,439,452,465,478,491,504,517,530,543,556,]]}};
//		if (skillName == "DestructionVolcano Proc") { skill = sk_DestructionVolcano_Proc }

//		var sk_DestructionMBoulder_Proc = {data:{values:[
//			["damage min",1,3,5,7,9,11,13,15,20,25,30,35,40,45,50,55,67,79,91,103,115,127,146,165,184,203,222,241,268,295,322,349,376,403,430,457,484,511,538,565,592,619,646,673,700,727,754,781,808,835,862,889,916,943,970,997,1024,1051,1078,1105,], 
//			["damage max",2,5,8,11,14,17,20,23,29,35,41,47,53,59,65,71,84,97,110,123,136,149,169,189,209,229,249,269,297,325,353,381,409,437,465,493,521,549,577,605,633,661,689,717,745,773,801,829,857,885,913,941,969,997,1025,1053,1081,1109,1137,1165,], 
//			["fire min",2,3,7,10,11,14,15,20,24,28,32,36,40,44,48,52,59,70,80,92,103,114,142,170,198,226,254,282,322,362,402,442,482,522,562,602,642,682,722,762,802,842,882,922,962,1002,1042,1082,1122,1162,1202,1242,1282,1322,1362,1402,1442,1482,1522,1562,], 
//			["fire max",3,7,12,15,19,22,24,31,37,44,49,54,61,67,72,78,85,98,111,124,138,151,185,219,253,287,321,355,401,447,493,539,585,631,677,723,769,815,861,907,953,999,1045,1091,1137,1183,1229,1275,1321,1367,1413,1459,1505,1551,1597,1643,1689,1735,1781,1827,], 
//			["avg fire min",1,3,4,8,9,12,15,16,21,26,31,36,39,44,50,54,64,73,83,92,102,111,122,132,143,153,164,174,186,198,210,221,233,245,257,269,281,293,305,317,329,341,353,365,377,389,401,413,425,437,449,461,473,485,497,509,521,533,545,557,], 
//			["avg fire max",2,3,7,9,10,14,15,18,22,27,32,37,42,45,50,56,65,74,84,93,103,112,123,133,144,154,165,176,188,199,211,223,234,246,258,270,282,294,306,318,330,342,354,366,378,390,402,414,426,438,450,462,474,486,498,510,522,534,546,558,]]}};
//		if (skillName == "DestructionMBoulder Proc") { skill = sk_DestructionMBoulder_Proc }

//		var sk_DestructionNova_Proc = {data:{values:[
//			["lightning min",1,1,1,1,1,1,1,1,6,11,16,21,26,31,36,41,51,61,71,81,91,101,121,141,161,181,201,221,244,267,290,313,336,359,382,405,428,451,474,497,520,543,566,589,612,635,658,681,704,727,750,773,796,819,842,865,888,911,934,957,], 
//			["lightning max",40,60,80,100,120,140,160,180,220,260,300,340,380,420,460,500,560,620,680,740,800,860,935,1010,1085,1160,1235,1310,1385,1460,1535,1610,1685,1760,1835,1910,1985,2060,2135,2210,2285,2360,2435,2510,2585,2660,2735,2810,2885,2960,3035,3110,3185,3260,3335,3410,3485,3560,3635,3710,]]}}; 
//		if (skillName == "DestructionNova Proc") { skill = sk_DestructionNova_Proc }
		var sk_CTC_Volcano_Proc = {data:{values:[
			["damage min",8,10,12,13,16,18,19,22,25,29,33,38,41,45,49,53,59,65,71,77,84,90,104,118,132,146,160,174,192,210,228,246,264,282,300,318,336,354,372,390,408,426,444,462,480,498,516,534,552,570,588,606,624,642,660,678,696,714,732,750,], 
			["damage max",10,13,16,18,22,24,28,30,37,43,48,54,60,66,72,78,88,98,108,118,129,139,155,171,187,203,219,235,257,279,301,323,345,367,389,411,433,455,477,499,521,543,565,587,609,631,653,675,697,719,741,763,785,807,829,851,873,895,917,939,], 
			["fire min",8,10,11,13,16,18,19,22,25,30,33,38,41,46,50,54,60,66,72,77,84,90,98,106,114,122,130,138,149,160,171,182,193,204,215,226,237,248,259,270,281,292,303,314,325,336,347,358,369,380,391,402,413,424,435,446,457,468,479,490,], 
			["fire max",10,11,13,16,18,19,22,24,27,32,36,39,44,47,52,55,61,68,74,80,86,92,100,108,116,124,132,140,153,166,179,192,205,218,231,244,257,270,283,296,309,322,335,348,361,374,387,400,413,426,439,452,465,478,491,504,517,530,543,556,]]}};
		if (skillName == "CTC Volcano Proc") { skill = sk_CTC_Volcano_Proc }

		var sk_CTC_MBoulder_Proc = {data:{values:[
			["damage min",1,3,5,7,9,11,13,15,20,25,30,35,40,45,50,55,67,79,91,103,115,127,146,165,184,203,222,241,268,295,322,349,376,403,430,457,484,511,538,565,592,619,646,673,700,727,754,781,808,835,862,889,916,943,970,997,1024,1051,1078,1105,], 
			["damage max",2,5,8,11,14,17,20,23,29,35,41,47,53,59,65,71,84,97,110,123,136,149,169,189,209,229,249,269,297,325,353,381,409,437,465,493,521,549,577,605,633,661,689,717,745,773,801,829,857,885,913,941,969,997,1025,1053,1081,1109,1137,1165,], 
			["fire min",2,3,7,10,11,14,15,20,24,28,32,36,40,44,48,52,59,70,80,92,103,114,142,170,198,226,254,282,322,362,402,442,482,522,562,602,642,682,722,762,802,842,882,922,962,1002,1042,1082,1122,1162,1202,1242,1282,1322,1362,1402,1442,1482,1522,1562,], 
			["fire max",3,7,12,15,19,22,24,31,37,44,49,54,61,67,72,78,85,98,111,124,138,151,185,219,253,287,321,355,401,447,493,539,585,631,677,723,769,815,861,907,953,999,1045,1091,1137,1183,1229,1275,1321,1367,1413,1459,1505,1551,1597,1643,1689,1735,1781,1827,], 
			["avg fire min",1,3,4,8,9,12,15,16,21,26,31,36,39,44,50,54,64,73,83,92,102,111,122,132,143,153,164,174,186,198,210,221,233,245,257,269,281,293,305,317,329,341,353,365,377,389,401,413,425,437,449,461,473,485,497,509,521,533,545,557,], 
			["avg fire max",2,3,7,9,10,14,15,18,22,27,32,37,42,45,50,56,65,74,84,93,103,112,123,133,144,154,165,176,188,199,211,223,234,246,258,270,282,294,306,318,330,342,354,366,378,390,402,414,426,438,450,462,474,486,498,510,522,534,546,558,]]}};
		if (skillName == "CTC MBoulder Proc") { skill = sk_CTC_MBoulder_Proc }

		var sk_CTC_Nova_Proc = {data:{values:[
			["lightning min",1,1,1,1,1,1,1,1,6,11,16,21,26,31,36,41,51,61,71,81,91,101,121,141,161,181,201,221,244,267,290,313,336,359,382,405,428,451,474,497,520,543,566,589,612,635,658,681,704,727,750,773,796,819,842,865,888,911,934,957,], 
			["lightning max",40,60,80,100,120,140,160,180,220,260,300,340,380,420,460,500,560,620,680,740,800,860,935,1010,1085,1160,1235,1310,1385,1460,1535,1610,1685,1760,1835,1910,1985,2060,2135,2210,2285,2360,2435,2510,2585,2660,2735,2810,2885,2960,3035,3110,3185,3260,3335,3410,3485,3560,3635,3710,]]}}; 
		if (skillName == "CTC Nova Proc") { skill = sk_CTC_Nova_Proc }


		var result = skill.data.values[elem][lvl];
		var lycan_lvl = ~~character["oskill_Lycanthropy"] + character.all_skills + Math.ceil(character.all_skills_per_level*character.level);
		var phys_min = ((1+(character.e_damage+character.damage_bonus)/100)*((character.level-1)*character.min_damage_per_level+character.base_damage_min))+character.damage_min;
		var phys_max = ((1+(character.e_damage+character.damage_bonus)/100)*((character.level-1)*character.max_damage_per_level+character.base_damage_max))+character.damage_max;
	
	// Universal
		if (skillName == "Ball Lightning" && elem < 2) {			result *= ((1 + 0.01*Math.floor((character.energy + character.all_attributes)*(1+character.max_energy/100)/3)) * (1+character.lDamage/100)) }
		if (skillName == "CTC Discharge Proc" && elem < 2) {	result *= ((1 + 0.01*Math.floor((character.energy + character.all_attributes)*(1+character.max_energy/100)/2)) * (1+character.lDamage/100)) }
//		if (skillName == "Dangoon Discharge Proc" && elem < 2) {	result *= ((1 + 0.01*Math.floor((character.energy + character.all_attributes)*(1+character.max_energy/100)/2)) * (1+character.lDamage/100)) }
//		if (skillName == "DangoonChain Proc"  && elem < 2) {		result *= lvl += character.skills_lightning_all }
	// Barbarian
		if (skillName == "Battle Command" && elem == 0) {			result = 1 }
		if (skillName == "Whirling Axes" && elem == 2) {			result = skill.data.values[2][lvl] }
		if (skillName == "Whirling Axes" && elem < 2) { 			result *= ((0.01*Math.floor(character.dexterity + character.all_attributes))) }

		// Druid
		if (skillName == "Flame Dash" && elem == 0) {				result = 8 }
		if (skillName == "Flame Dash" && elem < 3 && elem > 0) {	result *= ((1 + 0.01*(character.energy + character.all_attributes)*(1+character.max_energy/100)) * (1+character.fDamage/100)) }
		if (skillName == "Werewolf" && elem == 0) {					result = (10 + sk[12].data.values[1][lycan_lvl]) }
		if (skillName == "Werewolf" && elem == 3) {					result = (sk[12].data.values[0][lycan_lvl]) }
		if (skillName == "Werebear" && elem == 0) {					result = (15 + sk[12].data.values[1][lycan_lvl]) }
		if (skillName == "Werebear" && elem == 1) {					result += (sk[12].data.values[0][lycan_lvl]) }
		if (skillName == "Summon Dire Wolf" && elem == 3) {			result = ((1 + (skill.data.values[6][lvl] / 100)) * skill.data.values[elem][character.difficulty]) }
//		if (skillName == "DestructionMBoulder Proc" && elem < 2) { 				result *= (1 + (0.20*skills[7].level)) }
//		if (skillName == "DestructionMBoulder Proc" && elem > 1 && elem < 4) { 	result *= ((1 + (0.23*skills[0].level)) * (1+character.fDamage/100)) }
//		if (skillName == "DestructionMBoulder Proc" && elem > 3 && elem < 6) { 	result *= ((1 + (0.17*skills[0].level)) * (1+character.fDamage/100)) }
//		if (skillName == "DestructionVolcano Proc" && elem < 2) { 						result *= (1 + (0.20*skills[1].level)) }
//		if (skillName == "DestructionVolcano Proc" && elem > 1 && elem < 4) { 			result *= ((1 + (0.14*skills[4].level + 0.14*skills[9].level)) * (1+character.fDamage/100)) }
		if (skillName == "CTC MBoulder Proc" && elem < 2) { 				result *= (1 + (0.20*skills[7].level)) }
		if (skillName == "CTC MBoulder Proc" && elem > 1 && elem < 4) { 	result *= ((1 + (0.23*skills[0].level)) * (1+character.fDamage/100)) }
		if (skillName == "CTC MBoulder Proc" && elem > 3 && elem < 6) { 	result *= ((1 + (0.17*skills[0].level)) * (1+character.fDamage/100)) }
		if (skillName == "CTC Volcano Proc" && elem < 2) { 						result *= (1 + (0.20*skills[1].level)) }
		if (skillName == "CTC Volcano Proc" && elem > 1 && elem < 4) { 			result *= ((1 + (0.14*skills[4].level + 0.14*skills[9].level)) * (1+character.fDamage/100)) }

		// Necromancer
		if (skillName == "Desecrate" && elem > 0 && elem < 3) { 	result *= (1+character.pDamage/100) }
	// Paladin
		var phys_min = 0;
		var phys_max = 0;
		if (skillName == "Vengeance" && equipped.weapon.name != "none" && elem < 8) {
			phys_min = (character.base_damage_min * (1+character.e_damage/100) + character.damage_min + (character.level-1)*character.min_damage_per_level);
			phys_max = (character.base_damage_max * (1+character.e_damage/100) + character.damage_max + (character.level-1)*character.max_damage_per_level);
		}
		if (skillName == "Vengeance" && elem == 0) {				result = phys_min }
		if (skillName == "Vengeance" && elem == 1) {				result = phys_max }
		if (skillName == "Vengeance" && elem == 2) {				result = Math.floor(phys_min * (skill.data.values[8][lvl]/100) * (1+character.fDamage/100)) }
		if (skillName == "Vengeance" && elem == 3) {				result = Math.floor(phys_max * (skill.data.values[8][lvl]/100) * (1+character.fDamage/100)) }
		if (skillName == "Vengeance" && elem == 4) {				result = Math.floor(phys_min * (skill.data.values[9][lvl]/100) * (1+character.cDamage/100)) }
		if (skillName == "Vengeance" && elem == 5) {				result = Math.floor(phys_max * (skill.data.values[9][lvl]/100) * (1+character.cDamage/100)) }
		if (skillName == "Vengeance" && elem == 6) {				result = Math.floor(phys_min * (skill.data.values[10][lvl]/100) * (1+character.lDamage/100)) }
		if (skillName == "Vengeance" && elem == 7) {				result = Math.floor(phys_max * (skill.data.values[10][lvl]/100) * (1+character.lDamage/100)) }

		// Sorceress
		if (skillName == "Fire Ball" && elem < 2) { 				result *= (1+character.fDamage/100) }
		if (skillName == "Fire Wall" && elem < 2) { 				result *= (1+character.fDamage/100) }
		if (skillName == "Meteor" && elem < 2) { 					result *= (1+character.fDamage/100) }	// physical damage multipled by fire bonus (25% of total fire damage as extra physical damage)
		if (skillName == "Meteor" && elem < 4 && elem > 1) { 		result *= (1+character.fDamage/100) }
		if (skillName == "Meteor" && elem < 6 && elem > 3) { 		result *= (1+character.fDamage/100) }
		if (skillName == "Hydra" && elem < 3 && elem > 0) { 		result *= (1+character.fDamage/100) }
		if (skillName == "CTC Discharge Proc" && elem < 2) { 	result *= ((1 + 0.03*skills_all["sorceress"][12].level + 0.03*skills_all["sorceress"][14].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
//		if (skillName == "Dangoon Discharge Proc" && elem < 2) { 	result *= ((1 + 0.03*skills_all["sorceress"][12].level + 0.03*skills_all["sorceress"][14].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
//		if (skillName == "Dangoon Discharge Proc" && elem == 0) { 	result = ((1 + 0.03*skills_all["sorceress"][12].level + 0.03*skills_all["sorceress"][14].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
//		if (skillName == "Dangoon Discharge Proc" && elem == 1) { 	result = ((1 + 0.03*skills_all["sorceress"][12].level + 0.03*skills_all["sorceress"][14].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
 
//		if (skillName == "Dangoon Chain Proc" && elem == 0) { 		result = ((1 + 0.03*skills_all["sorceress"][11].level + 0.03*skills_all["sorceress"][15].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
//	if (skillName == "DangoonChain Proc" && elem < 2) { 		result *= ((1 + 0.03*skills_all["sorceress"][11].level + 0.03*skills_all["sorceress"][15].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
	if (skillName == "CTC Chain Light Proc" && elem < 2) { 		result *= ((1 + 0.03*skills_all["sorceress"][11].level + 0.03*skills_all["sorceress"][15].level))} // + 0.01*Math.floor(((character.energy + character.all_attributes)*(1+character.max_energy/100))/2)) * (1+c.lDamage/100)) }
	if (skillName == "CTC Nova Proc" && elem < 2) { 		result *= ((1 + (0.03*skills_all["sorceress"][18].level)) * (1+character.lDamage/100)) }

	if (skillName == "Discharge") {		attack = 0; spell = 1; lDamage_min = character.getSkillData(skill,lvl,1); lDamage_max = character.getSkillData(skill,lvl,2); }
	
	return result
	},

	// getBuffData - gets a list of stats corresponding to a persisting buff
	//	skill: 
	// result: indexed array including stats affected and their values
	// ---------------------------------
	getBuffData : function(skill) {
		var id = skill.name.split(' ').join('_');
		var lvl = character["oskill_"+skill.name.split(" ").join("_")] + character.all_skills + Math.ceil(character.all_skills_per_level*character.level);	// TODO: restrict level calculations to setEffectData()?
		if (id == "Frigerate" || id == "Shiver_Armor" || id == "Cold_Mastery") { lvl += character.skills_cold_all }
		if (id == "Fire_Mastery") { lvl += character.skills_fire_all }
		var result = {};
		var lycan_lvl = ~~character["oskill_Lycanthropy"] + character.all_skills + Math.ceil(character.all_skills_per_level*character.level);
		var lycan_damage = ~~(skills_all["druid"][12].data.values[0][lycan_lvl]);
		var lycan_life = ~~(skills_all["druid"][12].data.values[1][lycan_lvl]);
		
		if (skill.name == "Inner Sight") { result.enemy_defense_flat = skill.data.values[0][lvl]; result.radius = skill.data.values[1][lvl]; }
		if (skill.name == "Lethal Strike") { result.cstrike = skill.data.values[0][lvl]; }
		if (skill.name == "Battle Command") { result.all_skills = 1; result.duration = skill.data.values[1][lvl]; }
		if (skill.name == "Battle Orders") { result.max_stamina = skill.data.values[1][lvl]; result.max_life = Math.round(skill.data.values[2][lvl]/2); result.max_mana = Math.round(skill.data.values[3][lvl]/2); result.duration = skill.data.values[0][lvl]; }
		if (skill.name == "Werewolf") {	// cannot be used with Werebear
			if (effects[id].info.enabled == 1) { disableEffect("Werebear") }
			result.max_life = (10 + lycan_life); result.max_stamina = 40; result.ar_bonus = skill.data.values[1][lvl]; result.ias_skill = skill.data.values[2][lvl]; result.damage_bonus = lycan_damage; result.duration = 1040;
		}
		if (skill.name == "Werebear") {	// cannot be used with Werewolf
			if (effects[id].info.enabled == 1) { disableEffect("Werewolf") }
			result.max_life = (15 + lycan_life); result.damage_bonus = skill.data.values[1][lvl] + lycan_damage; result.defense_bonus = skill.data.values[2][lvl]; result.duration = 1040;
		}
		if (skill.name == "Feral Rage") { result.velocity = skill.data.values[1][lvl]; result.life_leech = skill.data.values[3][lvl]; result.duration = 20; }
		if (skill.name == "Frigerate") {
			result.cDamage_min = skill.data.values[0][lvl] * (1+character.cDamage/100);
			result.cDamage_max = skill.data.values[1][lvl] * (1+character.cDamage/100);
			result.enemy_defense = skill.data.values[4][lvl]; result.radius = 16;
		}
		if (skill.name == "Shiver Armor") {
			if (effects[id].info.enabled == 1) { for (effect_id in effects) { if (effect_id != id && (effect_id.split("-")[0] == id || effect_id.split("-")[0] == "Chilling_Armor")) { disableEffect(effect_id) } } }
			result.defense_bonus = skill.data.values[1][lvl]; result.duration = skill.data.values[0][lvl];
		}
		if (skill.name == "Edged Weapon Mastery") { result.edged_damage = skill.data.values[0][lvl]; result.edged_ar = skill.data.values[1][lvl]; result.edged_cstrike = skill.data.values[2][lvl]; }
		if (skill.name == "Cold Mastery") { result.cPierce = skill.data.values[0][lvl]; result.cDamage = skill.data.values[1][lvl]; }
		if (skill.name == "Fire Mastery") { result.fPierce = skill.data.values[0][lvl]; result.fDamage = skill.data.values[1][lvl]; }
		
		if (skill.name == "Heart of Wolverine") {
			if (effects[id].info.enabled == 1) { for (effect_id in effects) { if (effect_id != id && effect_id.split("-")[0] == id) { disableEffect(effect_id) } } }
			result.damage_bonus = skill.data.values[1][lvl]; result.ar_bonus = skill.data.values[2][lvl]; result.radius = skill.data.values[3][lvl];
		}
		if (skill.name == "Concentration") { result.ar = skill.data.values[0][lvl]; result.damage_bonus = skill.data.values[1][lvl]; result.hammer_bonus = skill.data.values[2][lvl]; result.radius = 16; }

		if (skill.name == "Whirling Axes") { result.whirlychance = skill.data.values[2][lvl]}
		return result
	},

	// getSkillDamage - gets the damage and attack rating for the selected skill
	//	skillName: name of selected skill
	//	num: 1 or 2 (skill1 or skill2)
	//	ar: base attack rating
	//	min/max parameters: base damage of different types
	// ---------------------------------
	getSkillDamage : function(skillName, ar, phys_min, phys_max, phys_mult, nonPhys_min, nonPhys_max) {
		var nameMod = "oskill_"+skillName.split(" ").join("_");
		var ctcname = "CTC"
		if (nameMod.includes(ctcname)){
			var lvl = ~~character[nameMod] + Math.ceil(character.all_skills_per_level*character.level);
		}
		if (!nameMod.includes(ctcname)){
		var lvl = ~~character[nameMod] + character.all_skills + Math.ceil(character.all_skills_per_level*character.level);
		}
		var ar_bonus = 0; var damage_bonus = 0; var weapon_damage = 100;
		var damage_min = 0; var damage_max = 0;
		var fDamage_min = 0; var fDamage_max = 0;
		var cDamage_min = 0; var cDamage_max = 0;
		var lDamage_min = 0; var lDamage_max = 0;
		var pDamage_min = 0; var pDamage_max = 0; var pDamage_duration = 0;
		var mDamage_min = 0; var mDamage_max = 0;
		var skillMin = 0; var skillMax = 0; var skillAr = 0;
		var attack = 0;	// 0 = no basic damage, 1 = includes basic attack damage
		var spell = 2;	// 0 = uses attack rating, 1 = no attack rating, 2 = non-damaging
		var damage_enhanced = character.damage_bonus + character.e_damage;
		
		if (skillName == "Ball Lightning") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
//		else if (skillName == "Dangoon Discharge Proc") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "CTC Discharge Proc") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
//		else if (skillName == "DangoonChain Proc") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "CTC Chain Light Proc") {		attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
//		else if (skillName == "DestructionMBoulder Proc") { 		attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); }
//		else if (skillName == "DestructionVolcano Proc") { 			attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); }		
//		else if (skillName == "DestructionNova Proc") {			attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "CTC MBoulder Proc") { 		attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); }
		else if (skillName == "CTC Volcano Proc") { 			attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); }		
		else if (skillName == "CTC Nova Proc") {			attack = 0; spell = 1; lDamage_min = character_any.getSkillData(skillName,lvl,0); lDamage_max = character_any.getSkillData(skillName,lvl,1); }

		// else if (skillName == "Valkyrie") {		attack = 0; spell = 1; }
		else if (skillName == "Magic Arrow") {		attack = 1; spell = 0; mDamage_min = character_any.getSkillData(skillName,lvl,1); mDamage_max = character_any.getSkillData(skillName,lvl,2); }
		else if (skillName == "Multiple Shot") {	attack = 1; spell = 0; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Immolation Arrow") {	attack = 1; spell = 0; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Guided Arrow") {		attack = 1; spell = 1; weapon_damage = 150; damage_bonus = character_any.getSkillData(skillName,lvl,0); }
		else if (skillName == "Bash") { 			attack = 1; spell = 0; weapon_damage = 110; ar_bonus = character_any.getSkillData(skillName,lvl,2); damage_bonus = character_any.getSkillData(skillName,lvl,3); }
		else if (skillName == "Flame Dash") { 		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName,lvl,1); fDamage_max = character_any.getSkillData(skillName,lvl,2); }
		else if (skillName == "Feral Rage") {		attack = 1; spell = 0; ar_bonus = character_any.getSkillData(skillName,lvl,5); damage_bonus = character_any.getSkillData(skillName,lvl,4); }
		else if (skillName == "Summon Dire Wolf") {	attack = 0; spell = 1; damage_min = character_any.getSkillData(skillName,lvl,4); damage_max = character_any.getSkillData(skillName,lvl,5); ar_bonus = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Desecrate") {		attack = 0; spell = 1; lvl += character.skills_poison_all; pDamage_min = character_any.getSkillData(skillName,lvl,1); pDamage_max = character_any.getSkillData(skillName,lvl,2); pDamage_duration = 2; }
		else if (skillName == "Zeal") {				attack = 1; spell = 0; ar_bonus = character_any.getSkillData(skillName,lvl,0); damage_bonus = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Vengeance") {		attack = 1; spell = 0; fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); cDamage_min = character_any.getSkillData(skillName,lvl,4); cDamage_max = character_any.getSkillData(skillName,lvl,5); lDamage_min = character_any.getSkillData(skillName,lvl,6); lDamage_max = character_any.getSkillData(skillName,lvl,7); ar_bonus = character_any.getSkillData(skillName,lvl,11); }
		else if (skillName == "Dashing Strike") {	attack = 1; spell = 1; mDamage_min = character_any.getSkillData(skillName,lvl,1); mDamage_max = character_any.getSkillData(skillName,lvl,2); }
		else if (skillName == "Fire Ball") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName,lvl,0); fDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Fire Wall") {		attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName,lvl,0); fDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Meteor") {			attack = 0; spell = 1; lvl += character.skills_fire_all; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); fDamage_min = character_any.getSkillData(skillName,lvl,2); fDamage_max = character_any.getSkillData(skillName,lvl,3); }
		else if (skillName == "Hydra") {			attack = 0; spell = 1; lvl += character.skills_fire_all; fDamage_min = character_any.getSkillData(skillName,lvl,1); fDamage_max = character_any.getSkillData(skillName,lvl,2); }
		else if (skillName == "Blizzard") {			attack = 0; spell = 1; lvl += character.skills_cold_all; cDamage_min = character_any.getSkillData(skillName,lvl,0); cDamage_max = character_any.getSkillData(skillName,lvl,1); }
		else if (skillName == "Whirlwind") {		attack = 1; spell = 0; ar_bonus = character_any.getSkillData(skillName,lvl,1); damage_bonus = character_any.getSkillData(skillName,lvl,0); }
		else if (skillName == "Whirling Axes") {	attack = 1; spell = 0; damage_min = character_any.getSkillData(skillName,lvl,0); damage_max = character_any.getSkillData(skillName,lvl,1); }
		
		//	else if (skillName == "Discharge") {		attack = 0; spell = 1; lvl += character.skills_lightning_all; lDamage_min = character_any.getSkillData(skillName,lvl,1); lDamage_max = character_any.getSkillData(skillName,lvl,2); } 
	//	TODO: check weapon requirements (only conflict would be a Passion bow, which grants Bash & Zeal...) & werewolf/werebear requirements
		if (skillName == "Feral Rage") {
			var match = 0;
			if (effects["Werewolf"].info.enabled == 1) { match = 1 }
			if (match == 0) { spell = 2 }
		}
		
		if (attack == 0) { phys_min = 0; phys_max = 0; phys_mult = 1; nonPhys_min = 0; nonPhys_max = 0; damage_enhanced = 0; }
		nonPhys_min += (fDamage_min + cDamage_min + lDamage_min + pDamage_min + mDamage_min);
		nonPhys_max += (fDamage_max + cDamage_max + lDamage_max + pDamage_max + mDamage_max);
		phys_min = (~~phys_min * (phys_mult + damage_bonus/100) * (1 + (weapon_damage-100)/100) + (damage_min * (1+(damage_bonus+damage_enhanced)/100)));
		phys_max = (~~phys_max * (phys_mult + damage_bonus/100) * (1 + (weapon_damage-100)/100) + (damage_max * (1+(damage_bonus+damage_enhanced+(character.level*character.e_max_damage_per_level))/100)));
		if (spell != 2) { skillMin = Math.floor(phys_min+nonPhys_min); skillMax = Math.floor(phys_max+nonPhys_max); }
		if (spell == 0) { skillAr = Math.floor(ar*(1+ar_bonus/100)); }
		
		var result = {min:skillMin,max:skillMax,ar:skillAr};
		return result
	}
};