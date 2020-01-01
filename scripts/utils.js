const { findSteamAppByName, SteamNotFoundError } = require("find-steam-app");
const packageJson = require("../package.json");

module.exports.getDotaPath = async () => {
    try {
        return await findSteamAppByName("dota 2 beta");
    } catch (error) {
        if (!(error instanceof SteamNotFoundError)) {
            throw error;
        }
    }
};

module.exports.addonName = process.env.DOTA_ADDON_NAME || packageJson.name;
if (!/^[a-z][\d_a-z]+$/.test(module.exports.addonName)) {
    throw new Error(
        "Addon name may consist only of lowercase characters, digits, and underscores " +
            "and should start with a letter. Edit `name` field in `package.json` file.",
    );
}
