import axios from "axios";

export default async (req, res) => {
    try {
        const notionApiKey = process.env.NOTION_API_KEY;
        const databaseId = process.env.DATABASE_ID;

        if (!notionApiKey || !databaseId) {
            throw new Error("Missing NOTION_API_KEY or DATABASE_ID");
        }

        const response = await axios.post(
            `https://api.notion.com/v1/databases/${databaseId}/query`,
            {},
            {
                headers: {
                    "Authorization": `Bearer ${notionApiKey}`,
                    "Content-Type": "application/json",
                    "Notion-Version": "2022-06-28",
                },
            }
        );

        res.status(200).json({ success: true, data: response.data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


        const results = response.data.results.map(page => ({
            name: page.properties["이름"].title[0]?.plain_text || "No Name",
            value: page.properties["20DRY"]?.number || null,
        }));

        res.status(200).json({ success: true, data: results });
    } catch (error) {
        console.error("Error fetching Notion data:", error.message);
        res.status(500).json({ success: false, error: error.message });
    }
};
