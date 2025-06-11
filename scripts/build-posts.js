const fs = require("fs");
const path = require("path");
const { marked } = require("marked");
const matter = require("gray-matter");
const pug = require("pug");

const postsDir = path.join(__dirname, "../posts");
const outputDir = path.join(__dirname, "../docs"); // ROOT output folder

// Ensure output directory exists
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const postTemplate = pug.compileFile(
    path.join(__dirname, "templates/post.pug")
);

fs.readdirSync(postsDir).forEach((file) => {
    if (path.extname(file) === ".md") {
        const fullPath = path.join(postsDir, file);
        const mdContent = fs.readFileSync(fullPath, "utf8");

        // Parse frontmatter and markdown content
        const { data, content } = matter(mdContent);
        const htmlContent = marked(content);

        // Render HTML with Pug
        const html = postTemplate({
            title: data.title || file.replace(".md", ""),
            date: data.date || "",
            content: htmlContent,
        });

        // Write to root docs folder as .html
        const outputFileName = file.replace(".md", ".html");
        fs.writeFileSync(path.join(outputDir, outputFileName), html);
        console.log(`Built post: ${outputFileName}`);
    }
});
