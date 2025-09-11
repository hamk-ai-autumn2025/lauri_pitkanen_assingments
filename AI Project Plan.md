# Project Plan: Elder Scrolls IV: Oblivion Storybook Journals

## 1. Project Goal

**Primary Goal:**  
Produce a multi-page, narratable AI storybook of player character's (Eirhild) journals that grows as you play. Each quest/faction log becomes a new entry, with both text pages (EPUB/PDF/web) and high-quality narrated audio (TTS).  

### Concrete Examples
1. **Interactive Journal + Voice**  
   A web/book where each journal entry is displayed with metadata (location, quest, date) and a high-quality AI narration button.  
   Example: click “Gauntlets of the Crusader” entry → read text → press play → hear the narration.

2. **Dynamic Playthrough Log**  
   As you complete quests, an importer lets you add entries and auto-generate polished journal prose + narration.  
   Example: finish a Fighters Guild quest → paste notes → system outputs polished entry + audio and appends it to the book.

---

## 2. Technologies & Tools

### Text Generation
- OpenAI / GPT API  
- LangChain (optional) for orchestration

### Text-to-Speech
- ElevenLabs (high quality, emotional)  
- Google Cloud TTS (WaveNet)  
- Alternatives: Play.ht, Murf.ai  
- Open-source fallback: Coqui TTS

### Audio Editing
- Audacity (free) or Reaper  
- FFmpeg for batch processing

### Document & Ebook Generation
- Pandoc or Calibre → EPUB/PDF  
- Sigil for EPUB editing  
- InDesign or Affinity Publisher for print layouts

### Web / Interactive UI
- React (Next.js) + Tailwind CSS  
- Web Audio API for playback  
- Node.js / Express or Vercel/Netlify functions  
- SQLite or Firebase/Supabase for data

### Pipeline Automation
- GitHub Actions or scripts for text → audio → EPUB → deploy  
- Cloud storage (S3, Backblaze, Firebase)

### Authoring
- Notion / Google Docs for drafting  
- Obsidian for local notes

---

## 3. Risks & Mitigations

1. **Scope Creep**  
   - *Risk*: Covering all quests at once → overwhelming workload  
   - *Mitigation*: Start with main arc + 5 key quests

2. **Voice Quality / Ethics**  
   - *Risk*: TTS inconsistency, voice cloning issues  
   - *Mitigation*: Use stable TTS service, avoid real-voice cloning

3. **Copyright / IP**  
   - *Risk*: Bethesda IP issues if monetized  
   - *Mitigation*: Keep non-commercial, fan project only

4. **Costs**  
   - *Risk*: TTS + LLM usage fees  
   - *Mitigation*: Budget carefully, use free tiers

5. **Technical Complexity**  
   - *Risk*: Integration failures  
   - *Mitigation*: MVP first, automate later

6. **Audio Consistency**  
   - *Risk*: Tone varies entry to entry  
   - *Mitigation*: Fix presets and voice guides

---

# Project Plan: Eirhild's AI Storybook Journals (8-Week Schedule)

## Total Workload
- **Total Hours:** ~135  
- **Weekly Load:** ~16–17 hours  
- **Goal:** Produce a polished, multi-entry AI storybook with text + narration, EPUB/PDF, and a web version.

---

## Week 1 — Setup & Vision (16h)

**Goals:** Lay foundations, set creative direction, prepare tools.

- Define project scope, style guide, and voice for Eirhild (3h)  
- Set up repository + writing environment (Obsidian/Notion) (3h)  
- Test TTS providers (ElevenLabs, Google TTS, Coqui) (5h)  
- Draft first raw notes → AI conversion test entry (5h)  

---

## Week 2 — Journal Voice & Style (17h)

**Goals:** Lock in Eirhild’s journal voice and narrative flow.

- Experiment with prompt templates for converting notes to entries (5h)  
- Write and polish 2–3 sample entries (6h)  
- Document final style guide for tense, POV, tone (3h)  
- Review/edit entries for consistency (3h)  

---

## Week 3 — Audio Foundations (16h)

**Goals:** Establish narration pipeline.

- Generate TTS audio for 2 entries; adjust SSML for emotion (5h)  
- Test voice stability and pacing (3h)  
- Process audio in Audacity (normalize, export) (5h)  
- Document workflow for text → audio pipeline (3h)  

---

## Week 4 — Ebook & Structure (17h)

**Goals:** Begin shaping the storybook itself.

- Convert entries to Markdown chapters (3h)  
- Test Pandoc/Calibre → EPUB conversion (4h)  
- Add metadata, TOC, and placeholders (5h)  
- Create draft cover art (5h)  

---

## Week 5 — Expansion (16h)

**Goals:** Add more quest entries and grow content base.

- Write/polish 3–4 more quest journal entries (7h)  
- Generate matching audio for these entries (6h)  
- Editorial pass on all content so far (3h)  

---

## Week 6 — Automation (17h)

**Goals:** Light automation of the pipeline.

- Script to generate Markdown from notes via GPT (5h)  
- Script to batch-generate audio (4h)  
- Automate EPUB/PDF builds (4h)  
- Test pipeline end-to-end with 1 new entry (4h)  

---

## Week 7 — Web Storybook (16h)

**Goals:** Build simple web reader with audio playback.

- Create minimal React site with Tailwind styling (5h)  
- Add audio player component for entries (4h)  
- Import entries + audio into web layout (4h)  
- QA across devices, fix bugs (3h)  

---

## Week 8 — Polish & Delivery (16h)

**Goals:** Finalize, package, and release.

- Consistency edit across all entries (4h)  
- Generate final EPUB, PDF, and ZIP with MP3s (4h)  
- Add fan disclaimer + credits (3h)  
- Deploy web storybook (3h)  
- Retrospective and plan for adding future entries (2h)  

---

## Final Deliverables (End of Week 8)

- **8–10 polished journal entries** in Eirhild’s voice  
- **Narrated audio** for each entry  
- **Compiled EPUB + PDF** with metadata and cover  
- **Web-based storybook** with audio playback  
- **Automation scripts** for adding new entries  
- **Documentation + fan disclaimer**

