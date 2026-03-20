// ===================================
// MINECRAFT MOBS FOR SANDBOXELS
// ===================================
// A comprehensive mod adding all major Minecraft mobs to Sandboxels
// Includes passive, neutral, hostile, and boss mobs with ecosystem interactions

/* ==================== PASSIVE MOBS ==================== */

// === COW ===
elements.cow = {
    color: ["#8b4513", "#ffffff", "#8b4513"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%8|FX%1|M2%8",
        "XX|M1%90|XX"
    ],
    category: "life",
    state: "solid",
    density: 1200,
    temp: 36,
    tempHigh: 45,
    tempLow: 5,
    stateHigh: "cooked_beef",
    stateLow: "frozen_meat",
    breakInto: ["beef", "beef", "leather"],
    reactions: {
        "wheat": {elem1: null, elem2: "baby_cow", func: function(px1, px2) {
            if (Math.random() < 0.3) px2.element = "baby_cow";
        }},
        "fire": {elem1: "cooked_beef", elem2: null}
    },
    egg: "baby_cow",
    foodNeed: 12,
    hidden: false
};

elements.baby_cow = {
    color: ["#a0522d", "#ffcccc", "#a0522d"],
    behavior: [
        "M2%5|M2%5|M2%5",
        "M2%15|FX%2|M2%15",
        "XX|M1%85|XX"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 36,
    tempHigh: 45,
    tempLow: 5,
    stateHigh: "cooked_beef",
    stateLow: "frozen_meat",
    breakInto: ["beef", "leather"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 600) pixel.element = "cow";
    }
};

// === SHEEP ===
elements.sheep = {
    color: ["#ffffff", "#ffb6c1", "#ffffff"],
    behavior: [
        "M2%3|M2%3|M2%3",
        "M2%10|FX%1|M2%10",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 1100,
    temp: 36,
    tempHigh: 45,
    tempLow: 5,
    stateHigh: "cooked_mutton",
    stateLow: "frozen_meat",
    breakInto: ["mutton", "mutton", "wool"],
    reactions: {
        "wheat": {elem1: null, elem2: "baby_sheep"}
    },
    egg: "baby_sheep",
    foodNeed: 10,
    hidden: false
};

elements.baby_sheep = {
    color: ["#fffacd", "#ffb6c1", "#fffacd"],
    behavior: [
        "M2%5|M2%5|M2%5",
        "M2%15|FX%2|M2%15",
        "XX|M1%85|XX"
    ],
    category: "life",
    state: "solid",
    density: 800,
    temp: 36,
    breakInto: ["wool"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 600) pixel.element = "sheep";
    }
};

// === PIG ===
elements.pig = {
    color: ["#ff69b4", "#ffb6d9"],
    behavior: [
        "M2%4|M2%4|M2%4",
        "M2%12|FX%1|M2%12",
        "XX|M1%86|XX"
    ],
    category: "life",
    state: "solid",
    density: 1150,
    temp: 36,
    tempHigh: 45,
    tempLow: 5,
    stateHigh: "cooked_pork",
    stateLow: "frozen_meat",
    breakInto: ["pork", "pork"],
    reactions: {
        "carrot": {elem1: null, elem2: "baby_pig"},
        "potato": {elem1: null, elem2: "baby_pig"}
    },
    egg: "baby_pig",
    foodNeed: 11,
    hidden: false
};

elements.baby_pig = {
    color: ["#ffc0cb", "#ffe4e1"],
    behavior: [
        "M2%6|M2%6|M2%6",
        "M2%18|FX%2|M2%18",
        "XX|M1%82|XX"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 36,
    breakInto: ["pork"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 600) pixel.element = "pig";
    }
};

// === CHICKEN ===
elements.chicken = {
    color: ["#cd853f", "#ffff99", "#cd853f"],
    behavior: [
        "M2%8|M2%5|M2%8",
        "M2%15|FX%2|M2%15",
        "M1%20|M1%50|M1%20"
    ],
    category: "life",
    state: "solid",
    density: 800,
    temp: 40,
    tempHigh: 50,
    tempLow: 5,
    stateHigh: "cooked_chicken",
    stateLow: "frozen_meat",
    breakInto: ["chicken_meat", "feather"],
    reactions: {
        "seeds": {elem1: null, elem2: "baby_chicken"}
    },
    egg: "baby_chicken",
    foodNeed: 8,
    hidden: false
};

elements.baby_chicken = {
    color: ["#daa520", "#ffff99"],
    behavior: [
        "M2%10|M2%8|M2%10",
        "M2%20|FX%3|M2%20",
        "M1%30|M1%40|M1%30"
    ],
    category: "life",
    state: "solid",
    density: 600,
    temp: 40,
    breakInto: ["feather"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 400) pixel.element = "chicken";
    }
};

// === VILLAGER ===
elements.villager = {
    color: ["#d7a8b8", "#8b4513", "#663399"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%8|FX%1|M2%8",
        "XX|M1%92|XX"
    ],
    category: "life",
    state: "solid",
    density: 1300,
    temp: 35,
    tempHigh: 45,
    tempLow: 5,
    stateHigh: "ash",
    stateLow: "frozen_meat",
    breakInto: ["emerald", "emerald"],
    hidden: false
};

// === RABBIT ===
elements.rabbit = {
    color: ["#8b4513", "#ffffff"],
    behavior: [
        "M2%6|M2%4|M2%6",
        "M2%20|FX%3|M2%20",
        "XX|M1%80|XX"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 36,
    tempHigh: 45,
    tempLow: -10,
    breakInto: ["rabbit_meat", "rabbit_hide"],
    reactions: {
        "carrot": {elem1: null, elem2: "baby_rabbit"}
    },
    egg: "baby_rabbit",
    foodNeed: 8,
    hidden: false
};

elements.baby_rabbit = {
    color: ["#a0522d", "#ffcccc"],
    behavior: [
        "M2%10|M2%8|M2%10",
        "M2%25|FX%4|M2%25",
        "XX|M1%75|XX"
    ],
    category: "life",
    state: "solid",
    density: 700,
    temp: 36,
    breakInto: ["rabbit_hide"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 500) pixel.element = "rabbit";
    }
};

/* ==================== NEUTRAL MOBS ==================== */

// === WOLF ===
elements.wolf = {
    color: ["#696969", "#ffffff", "#696969"],
    behavior: [
        "M2%3|M2%3|M2%3",
        "M2%15|FX%2|M2%15",
        "XX|M1%85|XX"
    ],
    category: "life",
    state: "solid",
    density: 1250,
    temp: 35,
    tempHigh: 50,
    tempLow: -15,
    stateHigh: "ash",
    stateLow: "frozen_meat",
    breakInto: ["bone"],
    reactions: {
        "meat": {elem1: null, elem2: "baby_wolf"},
        "beef": {elem1: null, elem2: "baby_wolf"},
        "zombie": {elem1: "wolf", elem2: null, func: function(px1, px2) { px2.element = "blood"; }}
    },
    egg: "baby_wolf",
    foodNeed: 15,
    hidden: false
};

elements.baby_wolf = {
    color: ["#808080", "#ffb6d9"],
    behavior: [
        "M2%5|M2%5|M2%5",
        "M2%18|FX%3|M2%18",
        "XX|M1%82|XX"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 35,
    breakInto: ["bone"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 600) pixel.element = "wolf";
    }
};

// === BEE ===
elements.bee = {
    color: ["#ffff00", "#000000"],
    behavior: [
        "M2%15|FX%5|M2%15",
        "FX%20|XX|FX%20",
        "M2%15|FX%5|M2%15"
    ],
    category: "life",
    state: "solid",
    density: 600,
    temp: 20,
    tempHigh: 40,
    tempLow: 5,
    breakInto: [],
    hidden: false
};

// === BAT ===
elements.bat = {
    color: ["#3d3d3d", "#5c5c5c"],
    behavior: [
        "FX%20|FX%20|FX%20",
        "FX%25|XX|FX%25",
        "FX%20|FX%20|FX%20"
    ],
    category: "life",
    state: "solid",
    density: 500,
    temp: 15,
    tempHigh: 40,
    tempLow: 0,
    breakInto: [],
    hidden: false
};

// === ENDERMITE ===
elements.endermite = {
    color: ["#704fc9", "#7851a9"],
    behavior: [
        "M2%4|M2%3|M2%4",
        "M2%12|FX%2|M2%12",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 700,
    temp: 25,
    tempHigh: 45,
    tempLow: -10,
    breakInto: ["ender_pearl"],
    hidden: false
};

/* ==================== HOSTILE MOBS ==================== */

// === ZOMBIE ===
elements.zombie = {
    color: ["#689f38", "#8bc34a"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%12|FX%2|M2%12",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 1200,
    temp: 2,
    tempHigh: 30,
    tempLow: -40,
    stateHigh: "ash",
    stateLow: "frozen_meat",
    breakInto: ["rotten_flesh", "bone"],
    reactions: {
        "villager": {elem1: "zombie", elem2: "zombie_villager"},
        "chicken": {elem1: "zombie", elem2: null, func: function(px1, px2) { px2.element = "rotten_flesh"; }},
        "cow": {elem1: "zombie", elem2: null, func: function(px1, px2) { px2.element = "rotten_flesh"; }},
        "pig": {elem1: "zombie", elem2: null, func: function(px1, px2) { px2.element = "rotten_flesh"; }},
        "wolf": {elem1: "zombie", elem2: null, func: function(px1, px2) { px2.element = "blood"; }}
    },
    egg: "baby_zombie",
    foodNeed: 0,
    hidden: false
};

elements.baby_zombie = {
    color: ["#7cb342", "#9ccc65"],
    behavior: [
        "M2%4|M2%3|M2%4",
        "M2%15|FX%3|M2%15",
        "XX|M1%85|XX"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 2,
    tempHigh: 35,
    breakInto: ["rotten_flesh"],
    hidden: true,
    tick: function(pixel) {
        if (pixel.age > 400) pixel.element = "zombie";
    }
};

// === SKELETON ===
elements.skeleton = {
    color: ["#f5f5dc", "#d3d3d3"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%12|FX%2|M2%12",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 950,
    temp: 5,
    tempHigh: 35,
    tempLow: -50,
    stateHigh: "ash",
    breakInto: ["bone", "bone", "bone"],
    reactions: {
        "fire": {elem1: "skeleton", elem2: null},
        "arrow_projectile": {elem1: null, elem2: null}
    },
    hidden: false
};

// === CREEPER ===
elements.creeper = {
    color: ["#429f13", "#4ab319"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%14|FX%1|M2%14",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 1000,
    temp: 20,
    tempHigh: 50,
    tempLow: -30,
    breakInto: ["gunpowder", "gunpowder"],
    reactions: {
        "fire": {elem1: "creeper", elem2: "explosion", func: function() {
            explosion();
        }},
        "lava": {elem1: "creeper", elem2: "explosion", func: function() {
            explosion();
        }}
    },
    hidden: false,
    tick: function(pixel) {
        if (Math.random() < 0.02 && pixel.age > 100) {
            pixel.element = "explosion";
        }
    }
};

function explosion() {
    // Simple explosion effect
}

// === SPIDER ===
elements.spider = {
    color: ["#1a1a1a", "#000000"],
    behavior: [
        "M2%2|M2%3|M2%2",
        "M2%8|FX%3|M2%8",
        "M2%2|M1%20|M2%2"
    ],
    category: "life",
    state: "solid",
    density: 950,
    temp: 15,
    tempHigh: 50,
    tempLow: -10,
    breakInto: ["string", "string"],
    reactions: {
        "fire": {elem1: "spider", elem2: null}
    },
    hidden: false
};

// === CAVE SPIDER ===
elements.cave_spider = {
    color: ["#2f4f4f", "#36648b"],
    behavior: [
        "M2%3|M2%4|M2%3",
        "M2%10|FX%3|M2%10",
        "M2%3|M1%25|M2%3"
    ],
    category: "life",
    state: "solid",
    density: 900,
    temp: 12,
    tempHigh: 45,
    tempLow: -20,
    breakInto: ["string"],
    hidden: false
};

// === WITCH ===
elements.witch = {
    color: ["#471c47", "#a09a99"],
    behavior: [
        "M2%3|M2%2|M2%3",
        "M2%15|FX%2|M2%15",
        "XX|M1%85|XX"
    ],
    category: "life",
    state: "solid",
    density: 1200,
    temp: 20,
    tempHigh: 45,
    tempLow: -15,
    breakInto: ["potion", "potion", "glowstone_dust"],
    reactions: {
        "fire": {elem1: "witch", elem2: null, func: function(px1, px2) { px2.element = "water"; }},
        "poison": {elem1: "witch", elem2: null}
    },
    hidden: false
};

// === ENDERMAN ===
elements.enderman = {
    color: ["#1a1a1a", "#1a1a1a"],
    behavior: [
        "FX%8|FX%8|FX%8",
        "FX%20|XX|FX%20",
        "FX%8|FX%8|FX%8"
    ],
    category: "life",
    state: "solid",
    density: 1100,
    temp: 25,
    tempHigh: 50,
    tempLow: -50,
    stateHigh: "ash",
    breakInto: ["ender_pearl"],
    reactions: {
        "water": {elem1: "enderman", elem2: null, func: function(px1, px2) { px2.element = "ash"; }}
    },
    hidden: false
};

// === WARDEN ===
elements.warden = {
    color: ["#0b0b0b", "#1a1a1a"],
    behavior: [
        "M2%1|M2%1|M2%1",
        "M2%4|FX%1|M2%4",
        "XX|M1%95|XX"
    ],
    category: "life",
    state: "solid",
    density: 2200,
    temp: 10,
    tempHigh: 40,
    tempLow: -50,
    stateHigh: "ash",
    breakInto: ["sculk_shard", "sculk_catalyst"],
    reactions: {
        "vibration": {elem1: "warden", elem2: null, func: function(px1, px2) { px1.element = "angry_warden"; }}
    },
    hidden: false,
    tick: function(pixel) {
        // Occasionally become enraged (simulates sensing vibrations)
        if (pixel.age % 60 === 0 && Math.random() < 0.1) {
            pixel.element = "angry_warden";
        }
    }
};

elements.angry_warden = {
    color: ["#1a1a1a", "#880000"],
    behavior: [
        "M2%3|M2%3|M2%3",
        "M2%20|FX%2|M2%20",
        "XX|M1%80|XX"
    ],
    category: "life",
    state: "solid",
    density: 2200,
    temp: 10,
    tempHigh: 40,
    tempLow: -50,
    stateHigh: "ash",
    breakInto: ["sculk_shard", "sculk_catalyst", "skull"],
    reactions: {
        "water": {elem1: "angry_warden", elem2: "ash"}
    },
    hidden: false,
    tick: function(pixel) {
        // Occasionally explode while enraged
        if (Math.random() < 0.02) {
            pixel.element = "explosion";
        }
    }
};

/* ==================== BOSS MOBS ==================== */

// === WITHER ===
elements.wither = {
    color: ["#3a3a3a", "#1a1a1a"],
    behavior: [
        "FX%10|FX%8|FX%10",
        "FX%25|XX|FX%25",
        "FX%10|FX%8|FX%10"
    ],
    category: "life",
    state: "solid",
    density: 1500,
    temp: 5,
    tempHigh: 40,
    tempLow: -100,
    breakInto: ["nether_star", "skull"],
    reactions: {
        "living_element": {elem1: "wither", elem2: null, func: function(px1, px2) {
            if (["zombie", "skeleton", "creeper", "spider"].includes(px2.element)) {
                px2.element = null;
            }
        }}
    },
    hidden: false,
    tick: function(pixel) {
        // Wither slowly moves
        if (Math.random() < 0.05) {
            pixel.r = Math.floor(Math.random() * 4);
        }
    }
};

// === ENDER DRAGON ===
elements.ender_dragon = {
    color: ["#3d1a4d", "#704fc9"],
    behavior: [
        "FX%12|FX%10|FX%12",
        "FX%30|XX|FX%30",
        "FX%12|FX%10|FX%12"
    ],
    category: "life",
    state: "solid",
    density: 2000,
    temp: 20,
    tempHigh: 100,
    tempLow: -100,
    breakInto: ["dragon_egg", "dragon_egg", "dragon_egg"],
    reactions: {
        "water": {elem1: "ender_dragon", elem2: null}
    },
    hidden: false
};

/* ==================== FOOD & DROPS ==================== */

// Meat drops
elements.beef = {
    color: "#8b0000",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
    tempHigh: 100,
    stateHigh: "cooked_beef",
    breakInto: []
};

elements.cooked_beef = {
    color: "#4a0000",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
    breakInto: []
};

elements.pork = {
    color: "#cc5500",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
    tempHigh: 100,
    stateHigh: "cooked_pork",
    breakInto: []
};

elements.cooked_pork = {
    color: "#8b4513",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 800,
    breakInto: []
};

elements.chicken_meat = {
    color: "#ffaa44",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 700,
    tempHigh: 100,
    stateHigh: "cooked_chicken",
    breakInto: []
};

elements.cooked_chicken = {
    color: "#cc7722",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 700,
    breakInto: []
};

elements.mutton = {
    color: "#ff6347",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 750,
    tempHigh: 100,
    stateHigh: "cooked_mutton",
    breakInto: []
};

elements.cooked_mutton = {
    color: "#cc4433",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 750,
    breakInto: []
};

elements.rotten_flesh = {
    color: "#5d4e37",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 700,
    breakInto: []
};

elements.rabbit_meat = {
    color: "#ff8c00",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 650,
    tempHigh: 100,
    stateHigh: "cooked_rabbit",
    breakInto: []
};

elements.cooked_rabbit = {
    color: "#d2691e",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 650,
    breakInto: []
};

// Materials
elements.leather = {
    color: "#8b4513",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 750,
    breakInto: []
};

elements.wool = {
    color: "#ffffff",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 650,
    breakInto: []
};

elements.feather = {
    color: "#f5deb3",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 400,
    breakInto: []
};

elements.bone = {
    color: "#fffaf0",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1000,
    tempHigh: 150,
    stateHigh: "bonemeal",
    breakInto: []
};

elements.bonemeal = {
    color: "#f0f8ff",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 900,
    breakInto: []
};

elements.string = {
    color: "#a9a9a9",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 500,
    breakInto: []
};

elements.gunpowder = {
    color: "#3a3a3a",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 800,
    tempHigh: 150,
    stateHigh: "explosion",
    breakInto: []
};

elements.rabbit_hide = {
    color: "#cd853f",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 700,
    breakInto: []
};

elements.ender_pearl = {
    color: ["#1a4d4d", "#2d6666"],
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1400,
    breakInto: []
};

elements.potion = {
    color: "#884488",
    behavior: behaviors.LIQUID,
    category: "materials",
    state: "liquid",
    density: 1000,
    breakInto: []
};

elements.glowstone_dust = {
    color: "#ffff99",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 900,
    breakInto: []
};

elements.nether_star = {
    color: ["#ffff00", "#ffff99"],
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1800,
    breakInto: []
};

elements.dragon_egg = {
    color: ["#3d1a4d", "#704fc9"],
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 2500,
    breakInto: []
};

elements.emerald = {
    color: "#50c878",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1300,
    breakInto: []
};

elements.skull = {
    color: "#f5f5dc",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1200,
    breakInto: []
};

elements.sculk_shard = {
    color: "#0a0f0a",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1300,
    breakInto: []
};

elements.sculk_catalyst = {
    color: "#0c2b1d",
    behavior: behaviors.POWDER,
    category: "materials",
    state: "solid",
    density: 1400,
    breakInto: []
};

elements.vibration = {
    color: "#88ffff",
    behavior: behaviors.GAS,
    category: "materials",
    state: "gas",
    density: 1,
    breakInto: []
};

elements.frozen_meat = {
    color: "#1a1a2e",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 900,
    tempHigh: 0,
    stateHigh: "rotten_flesh",
    breakInto: []
};

/* ==================== CROPS ==================== */

elements.wheat = {
    color: ["#ffcc00", "#ffff00"],
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 400,
    breakInto: []
};

elements.carrot = {
    color: "#ff8800",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 650,
    breakInto: []
};

elements.potato = {
    color: "#8b7355",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 700,
    breakInto: []
};

elements.seeds = {
    color: "#8b7355",
    behavior: behaviors.POWDER,
    category: "food",
    state: "solid",
    density: 600,
    breakInto: []
};

/* ==================== SPECIAL ELEMENTS ==================== */

elements.zombie_villager = {
    color: ["#689f38", "#8b4513"],
    behavior: [
        "M2%2|M2%2|M2%2",
        "M2%12|FX%1|M2%12",
        "XX|M1%88|XX"
    ],
    category: "life",
    state: "solid",
    density: 1250,
    temp: 2,
    tempHigh: 30,
    tempLow: -40,
    breakInto: ["emerald", "rotten_flesh"],
    hidden: true
};

elements.arrow_projectile = {
    color: "#8b4513",
    behavior: [
        "XX|XX|XX",
        "XX|FX|XX",
        "XX|XX|XX"
    ],
    category: "materials",
    state: "solid",
    density: 100,
    breakInto: []
};

// ===================================
// END OF MINECRAFT MOBS MOD
// ===================================
