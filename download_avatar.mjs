import fs from "fs";
import https from "https";
import path from "path";

const url = "https://youke2.picui.cn/s1/2025/12/18/69441824460c6.jpg";
const dest = path.join(process.cwd(), "public", "avatar.jpg");

const file = fs.createWriteStream(dest);

https
	.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (response) => {
		response.pipe(file);
		file.on("finish", () => {
			file.close();
			console.log("Download completed");
		});
	})
	.on("error", (err) => {
		fs.unlink(dest, () => {}); // Delete the file async. (But we don't check the result)
		console.error("Error downloading image:", err.message);
	});
