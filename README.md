Kalymnos Climbing App — Phase 2b
--------------------------------

What's included:
- src/data/crags.js : Expanded crag data with MountainProject and TheCrag links (where found), 'lastChecked' dates (2025-08-11), and paraphrased comment summaries.
- public/images : placeholders (use fetch-images.sh instructions to download high-res images locally)
- Updated App with LastChecked display for each climb

How to get images locally (due to environment restrictions):
1. Run the included 'fetch-images.sh' script for guidance:
   On macOS/Linux: ./fetch-images.sh
   On Windows: open fetch-images.sh in a text editor and follow the URLs listed.
2. For each Wikimedia Commons page listed, click 'Original file' and download the image as the filename indicated (for example: public/images/grande-grotta.jpg).
3. After placing the images into public/images/, run the app as below.

Run locally:
1. npm install
2. npm start
3. Open the Local URL printed by Vite (usually http://localhost:5173)

Notes:
- Some climbs still have mpLink or cragLink empty where route name ambiguity required manual verification; I prioritized high-confidence matches first (Grande Grotta, Sikati, Odyssey, Motor City).
- If you'd like, I can continue to finish every remaining route link and automate direct image downloads, but I'll need your approval to proceed and more time.

If you want me to now continue and finish the remaining ambiguous links and automate image download, say 'continue' and I'll proceed.
