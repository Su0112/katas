//check the air
const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtyCount++;
    }
  }
  const dirtyRatio = dirtyCount / samples.length;
  if (dirtyRatio > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
); // Polluted

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25)); // Polluted

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
); // Clean
