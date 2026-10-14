const sea = ["Great White Shark", "Hammerhead Shark", "Blue Whale", "Octopus", "Squid", "Spider Crab", "Sponge Crab", "Horseshoe Crab", "Chambered Nautilus", "Narwhal", "Walrus", "Elephant Seal", "Sea Lion", "Fur Seal", "Atlantic Trumpetfish", "Atlantic Wolffish", "Blue Marlin", "Deep-sea Anglerfish", "Moray Eel", "Barracuda", "Leafy Sea Dragon", "Sunfish", "Red Lionfish", "Porcupine Fish", "Tuna", "Salmon", "Green Turtle", "Leatherback Turtle", "Olive Sea Snake", "Basking Shark", "Thresher Shark", "Bluespotted Ribbontail Ray", "Goblin Shark", "Kelp Gull", "King Penguin", "Albatross"];
const humanParts = ["Human Head", "Human Arms", "Human Legs", "Human Hands", "Human Feet", "Human Face"];

const base = ["Human", ...sea];
const head = [...sea, "Human Head"];
const torso = ["Human", ...sea, ...humanParts];
const legs = ["Human", ...sea];
const arms = ["Human", ...sea];
const colour = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Black", "White", "Grey", "Silver", "Gold"];
const coat = ["Human Skin", "Grey and White Shark Skin", "Rough Shark Skin", "Mottled Blue-Grey Skin", "Colour-Changing Skin", "Translucent Skin", "Spiny Shell", "Sponge-Covered Shell", "Smooth Brown Shell", "Striped Spiral Shell", "Spotted Grey Skin", "Wrinkled Pink Skin", "Thick Blubbery Skin", "Sleek Brown Fur", "Dense Fur", "Spotted Scales", "Slimy Banded Skin", "Metallic Blue Scales", "Lumpy Dark Skin", "Slimy Patterned Skin", "Silver Scales", "Leafy Skin Flaps", "Rough Leathery Skin", "Red and White Striped Scales", "Spiky Skin", "Shiny Silver-Blue Scales", "Speckled Silver Scales", "Patterned Shell", "Leathery Shell", "Smooth Olive Scales", "Mottled Shark Skin", "Smooth Bronze Skin", "Blue-Spotted Skin", "Pink Translucent Skin", "Black and White Feathers", "Sleek Feathers with Orange Patches", "White Feathers"];
const extra = ["Fins", "Tail", "Extra Legs", "Extra Arms", "Split in Half", "Walks on All Fours"];
const extraSelect = [...sea, ...humanParts];
const size = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];

const lists = [base, head, torso, legs, arms, colour, coat, extra, extraSelect, size];

function roll(i) {
  const list = lists[i];
  const output = document.getElementById("num" + i);
  let count = 0;
  const spin = setInterval(() => {
    output.textContent = list[Math.floor(Math.random() * list.length)];
    count++;
    if (count > 20) clearInterval(spin);
  }, 30);
}
