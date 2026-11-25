/* =====================================================================
       STATE & SEED DATA (Sri Lankan University Context)
       ===================================================================== */
    const DEFAULT_STATE = {
      activeSpace: 'campus',
      profile: {
        name: `Kavinda Perera`,
        university: `University of Moratuwa`,
        degree: `B.Sc. Eng. (Hons) in Computer Science & Engineering`,
        bio: `Final-year undergraduate at University of Moratuwa exploring distributed systems, low-resource Sinhala-English NLP, and real-time 3D collaborative learning environments for Sri Lankan campuses.`,
        researchTopic: `Edge-Assisted Sinhala-Tamil Neural Machine Translation for Academic Lectures`,
        skills: [`Python`, `Three.js`, `Distributed Systems`, `NLP`, `TypeScript`],
        interests: [`AI & NLP`, `Spatial Computing`, `Open-Source EdTech`, `Smart Grids`],
        avatarMode: `3d`,
        avatarTheme: `cyan`,
        photoPreset: `scholar`
      },
      assignments: [
        {
          id: `asg-1`,
          title: `CS3042 Distributed Systems — Raft Leader Election Edge Cases`,
          category: `IT`,
          university: `University of Moratuwa · CS3042`,
          author: `Nethmi Jayawardena`,
          time: `2h ago`,
          docName: `Raft_Log_Verification_Guide.pdf`,
          body: `When two followers time out simultaneously under packet loss in our Go test harness, split votes repeat for 3 terms. Should randomized election timeouts scale above 300ms on local Docker bridges?`,
          upvotes: 18,
          upvoted: false,
          comments: [
            { author: `Kavinda Perera`, text: `Yes! Setting 250ms-500ms jitter resolved livelock in our lab cluster.` },
            { author: `Tharindu Silva`, text: `Also verify that RequestVote resets your timer only when granting vote.` }
          ]
        },
        {
          id: `asg-2`,
          title: `PR2105 Digital Storytelling — Interactive Documentary Wireframes`,
          category: `Media & Comm`,
          university: `University of Kelaniya · MC2105`,
          author: `Dilani Fernando`,
          time: `5h ago`,
          docName: `Kandy_Heritage_Storyboard_v2.fig`,
          body: `Sharing our non-linear interactive web documentary structure on Kandyan craftsmanship. Looking for feedback from Computing or Design peers on mobile scroll pacing.`,
          upvotes: 14,
          upvoted: false,
          comments: [
            { author: `Amaya Ranasinghe`, text: `Adding audio captions on chapter transitions helps mobile viewers stay oriented.` }
          ]
        },
        {
          id: `asg-3`,
          title: `EE3201 Power Electronics — MPPT Buck-Boost Converter Simulation`,
          category: `Engineering`,
          university: `University of Peradeniya · EE3201`,
          author: `Isuru Bandara`,
          time: `Yesterday`,
          docName: `Solar_MPPT_Simulink_Notes.csv`,
          body: `Comparing Perturb & Observe vs Incremental Conductance under rapid tropical cloud transients measured in Peradeniya. Sharing irradiance CSV logs for validation.`,
          upvotes: 23,
          upvoted: false,
          comments: []
        },
        {
          id: `asg-4`,
          title: `BM3110 Sri Lankan SME FinTech Adoption Regression Model`,
          category: `Business`,
          university: `University of Sri Jayewardenepura · BM3110`,
          author: `Shehan Wijesinghe`,
          time: `Yesterday`,
          docName: `SME_Survey_Codebook_2026.csv`,
          body: `Analyzing LANKAQR merchant adoption factors across Western and Central provinces (n=340). Need peer review on multicollinearity checks for digital literacy predictors.`,
          upvotes: 11,
          upvoted: false,
          comments: []
        },
        {
          id: `asg-5`,
          title: `BT2040 Coral Reef Bleaching Image Segmentation Dataset`,
          category: `Science`,
          university: `University of Ruhuna · BT2040`,
          author: `Malsha De Silva`,
          time: `2d ago`,
          docName: `Hikkaduwa_Transect_Metadata.json`,
          body: `Annotated 450 underwater quadrat frames from Hikkaduwa Marine National Park. Open to collaborating with ML students to benchmark U-Net segmentation accuracy.`,
          upvotes: 27,
          upvoted: false,
          comments: []
        },
        {
          id: `asg-6`,
          title: `ED3020 Bilingual STEM Pedagogy Toolkit for A/L Physics`,
          category: `Education`,
          university: `University of Colombo · ED3020`,
          author: `Harini Gunasekara`,
          time: `3d ago`,
          docName: `Bilingual_Physics_Concept_Map.txt`,
          body: `Designing dual-language (Sinhala/English & Tamil/English) interactive concept maps for projectile motion and wave optics to bridge first-year university transition.`,
          upvotes: 16,
          upvoted: false,
          comments: []
        }
      ],
      researchTopics: [
        {
          id: `res-1`,
          title: `Code-Mixed Sinhala-English Lecture Transcription Using Whisper Adapters`,
          field: `Local Language NLP`,
          university: `University of Colombo`,
          author: `Dinithi Karunaratne`,
          problem: `Sri Lankan STEM lectures frequently switch mid-sentence between English technical terms and Sinhala syntax, causing standard ASR models to drop 35% of terminology.`,
          seekingSkills: [`Python`, `NLP`, `PyTorch`, `Audio Processing`],
          matched: false,
          discussions: [
            { author: `Kavinda Perera`, text: `LoRA fine-tuning on 12 hours of annotated UCSC/UOM lecture audio gave strong gains on CS terms.` }
          ]
        },
        {
          id: `res-2`,
          title: `AI Microgrid Load Forecasting for Rural Solar Clusters in Monaragala`,
          field: `Renewable Energy`,
          university: `University of Peradeniya`,
          author: `Supun Rathnayake`,
          problem: `Off-grid village microgrids experience evening demand spikes during monsoon months. Seeking a lightweight edge-forecasting model for battery dispatch optimization.`,
          seekingSkills: [`Python`, `IoT`, `Time-Series`, `Distributed Systems`],
          matched: false,
          discussions: []
        },
        {
          id: `res-3`,
          title: `Real-Time 3D Spatial Classrooms on Low-Bandwidth Campus Networks`,
          field: `AI & Data Science`,
          university: `University of Moratuwa`,
          author: `Ravindu Jayasinghe`,
          problem: `Investigating WebRTC state delta compression and procedural Three.js geometry caching so multi-user 3D labs run smoothly on 4G student connections.`,
          seekingSkills: [`Three.js`, `TypeScript`, `WebRTC`, `Distributed Systems`],
          matched: true,
          discussions: []
        },
        {
          id: `res-4`,
          title: `Social Media Disinformation Graph Detection During Public Crises`,
          field: `Digital Media & Society`,
          university: `University of Kelaniya`,
          author: `Sajini Mendis`,
          problem: `Mapping coordinated narrative propagation across trilingual public feeds using network centrality metrics and media literacy interventions.`,
          seekingSkills: [`NLP`, `Graph Analytics`, `Media Studies`, `Python`],
          matched: false,
          discussions: []
        },
        {
          id: `res-5`,
          title: `Flood-Resilient Smart Drainage Telemetry for Colombo Basin`,
          field: `Environmental Science`,
          university: `SLIIT`,
          author: `Chathura Wickramasinghe`,
          problem: `Combining ultrasonic canal sensors with rainfall radar nowcasting to alert municipal and campus commuters 90 minutes before flash flooding.`,
          seekingSkills: [`Embedded C`, `GIS`, `React`, `IoT`],
          matched: false,
          discussions: []
        }
      ],
      projects: [
        {
          id: `proj-1`,
          title: `LankaScholar Open Thesis Repository`,
          domain: `EdTech & AI`,
          universities: `UOM · UOC · Peradeniya`,
          summary: `Federated citation explorer indexing Sri Lankan undergraduate abstracts with semantic topic clustering and supervisor matching.`,
          stack: [`Python`, `TypeScript`, `NLP`, `PostgreSQL`],
          neededRoles: `Frontend Engineer, NLP Annotator`,
          progress: 68,
          members: 4,
          joined: true
        },
        {
          id: `proj-2`,
          title: `AgriPulse — Paddy Soil Moisture LoRaWAN Mesh`,
          domain: `AgriTech & IoT`,
          universities: `Peradeniya · Ruhuna`,
          summary: `Low-cost solar LoRaWAN sensor nodes streaming soil salinity and moisture telemetry to smallholder cooperatives in Anuradhapura.`,
          stack: [`Embedded C`, `IoT`, `MQTT`, `Chart.js`],
          neededRoles: `PCB Designer, Mobile App Dev`,
          progress: 45,
          members: 3,
          joined: false
        },
        {
          id: `proj-3`,
          title: `SignBridge SL — Real-Time Sign Language Study Overlay`,
          domain: `EdTech & AI`,
          universities: `SLIIT · Kelaniya`,
          summary: `Browser-based pose-landmark interpreter translating Sri Lankan Sign Language gestures into live lecture captions.`,
          stack: [`TensorFlow.js`, `React`, `WebRTC`],
          neededRoles: `Dataset Reviewer, UI/UX Designer`,
          progress: 52,
          members: 5,
          joined: false
        }
      ],
      meetingRooms: [
        {
          id: `room-nlp`,
          name: `UOM & UCSC · Sinhala NLP Sprint`,
          topic: `Code-Mixed Lecture ASR`,
          whiteboard: [
            `1. Tokenize Sinhala-English technical compounds`,
            `2. Evaluate WER on 20-min UOM CS lecture`,
            `3. Push dataset split to Project Lab`
          ],
          chat: [
            { sender: `Nethmi (UOM)`, text: `Welcome! Slide 1 shows our latest Word Error Rate drop.` },
            { sender: `Dinithi (UCSC)`, text: `Added the phonetic lexicon notes to the 3D whiteboard.` }
          ]
        },
        {
          id: `room-grid`,
          name: `Peradeniya · Smart Microgrid Lab`,
          topic: `MPPT Solar Forecasting`,
          whiteboard: [
            `1. Compare cloud transient RMSE across 3 sites`,
            `2. Sync Simulink export CSV with Assignment Hub`
          ],
          chat: [
            { sender: `Isuru (PDN)`, text: `Walk up to the front digital screen to inspect the load curve.` }
          ]
        },
        {
          id: `room-media`,
          name: `Kelaniya & SLIIT · 3D UX Critiques`,
          topic: `Interactive Web Documentaries`,
          whiteboard: [
            `1. Check mobile glassmorphism contrast >= 4.5:1`,
            `2. Finalize Kandyan craft audio cues`
          ],
          chat: [
            { sender: `Dilani (KLN)`, text: `Feel free to test WASD navigation around the studio table!` }
          ]
        }
      ],
      activeRoomId: `room-nlp`
    };

    const PEER_DIRECTORY = [
      { name: `Nethmi Jayawardena`, uni: `University of Moratuwa`, degree: `B.Sc. Eng. Computer Science`, skills: [`Go`, `Distributed Systems`, `Kubernetes`, `Python`] },
      { name: `Dinithi Karunaratne`, uni: `University of Colombo`, degree: `B.Sc. Computer Science (UCSC)`, skills: [`NLP`, `PyTorch`, `Python`, `Linguistics`] },
      { name: `Isuru Bandara`, uni: `University of Peradeniya`, degree: `B.Sc. Eng. Electrical & Electronic`, skills: [`MATLAB`, `IoT`, `Power Systems`, `Embedded C`] },
      { name: `Dilani Fernando`, uni: `University of Kelaniya`, degree: `B.A. (Hons) Mass Communication`, skills: [`UX Research`, `Digital Storytelling`, `Figma`, `Video`] },
      { name: `Chathura Wickramasinghe`, uni: `SLIIT`, degree: `B.Sc. (Hons) Software Engineering`, skills: [`React`, `TypeScript`, `GIS`, `Three.js`] },
      { name: `Malsha De Silva`, uni: `University of Ruhuna`, degree: `B.Sc. Marine & Freshwater Sciences`, skills: [`R`, `Computer Vision`, `Ecology`, `Data Viz`] }
    ];

    const CAMPUS_ZONES = {
      assignment: {
        kicker: `Zone 01 · Coursework & Peer Help`,
        title: `Assignment Hub`,
        desc: `Post module assignments across IT, Engineering, Media & Comm, Business, Science, Arts, and Education. Share docs and get structured peer reviews.`,
        stat: `6 active threads · 18 shared resources`,
        targetSpace: `assignments`
      },
      research: {
        kicker: `Zone 02 · Thesis & Partner Matching`,
        title: `Research Library`,
        desc: `Pitch undergraduate and postgraduate thesis gaps, discuss research methodology, and auto-match with Sri Lankan co-researchers by skill.`,
        stat: `5 active theses · Auto-matching live`,
        targetSpace: `research`
      },
      meeting: {
        kicker: `Zone 03 · Spatial 3D Seminars`,
        title: `Virtual Meeting Center`,
        desc: `Enter a live Three.js 3D seminar room with animated student avatars, WASD movement, shared digital screens, live chat, and an interactive whiteboard.`,
        stat: `3 active 3D study rooms online`,
        targetSpace: `meeting`
      },
      lounge: {
        kicker: `Zone 04 · Student Identity & Networking`,
        title: `Student Lounge`,
        desc: `Configure your Sri Lankan university profile, customize your 3D Student Avatar or upload a profile photo, and connect with campus peers.`,
        stat: `Profile & 3D Avatar synced`,
        targetSpace: `profile`
      },
      lab: {
        kicker: `Zone 05 · Build Real Prototypes`,
        title: `Project Collaboration Lab`,
        desc: `Showcase interdisciplinary student prototypes, publish open roles, and recruit engineers, researchers, and media creators across universities.`,
        stat: `3 active projects · Recruiting`,
        targetSpace: `projects`
      }
    };

    let appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    let selectedCampusZoneKey = 'assignment';
    let assignmentCategoryFilter = 'All';
    let researchSkillMatchOnly = false;
    let labMode = 'projects';
    let sessionUploadedPhotoUrl = null;
    let toastTimer = null;

    /* =====================================================================
       PERSISTENCE HELPERS (notebookAppApi ONLY)
       ===================================================================== */
    async function persistState() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === 'function') {
          await window.notebookAppApi.setAppState(appState);
        }
      } catch (err) {
        // Silent fail-safe in case host is previewing offline
      }
    }

    function showToast(message) {
      const banner = document.getElementById('toast-banner');
      const textEl = document.getElementById('toast-message');
      if (!banner || !textEl) return;
      textEl.textContent = message;
      banner.classList.add('is-visible');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(hideToast, 3400);
    }

    function hideToast() {
      const banner = document.getElementById('toast-banner');
      if (banner) banner.classList.remove('is-visible');
    }

    /* =====================================================================
       NAVIGATION & VIEW SWITCHING
       ===================================================================== */
    function switchSpace(spaceName) {
      appState.activeSpace = spaceName;
      document.querySelectorAll('.space-view').forEach(function (el) {
        el.classList.toggle('is-active', el.id === 'view-' + spaceName);
      });
      document.querySelectorAll('.nav-btn').forEach(function (btn) {
        btn.classList.toggle('is-active', btn.dataset.space === spaceName);
      });

      // Resize active Three.js canvases cleanly when shown
      if (spaceName === 'campus') resizeCampus3D();
      if (spaceName === 'meeting') resizeMeeting3D();
      if (spaceName === 'profile') resizeProfile3D();

      persistState();
    }

    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.add('is-open');
    }

    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.classList.remove('is-open');
    }

    /* =====================================================================
       HOME: VIRTUAL CAMPUS ACTIONS
       ===================================================================== */
    function selectCampusZone(zoneKey) {
      selectedCampusZoneKey = zoneKey;
      const info = CAMPUS_ZONES[zoneKey];
      if (!info) return;

      document.querySelectorAll('#campus-zone-buttons .zone-btn').forEach(function (btn) {
        btn.classList.toggle('is-active', btn.dataset.zone === zoneKey);
      });

      const hud = document.getElementById('campus-hud-zone');
      const kicker = document.getElementById('zone-detail-kicker');
      const title = document.getElementById('zone-detail-title');
      const desc = document.getElementById('zone-detail-desc');
      const stat = document.getElementById('zone-detail-stat');

      if (hud) hud.textContent = `Zone: ${info.title}`;
      if (kicker) kicker.textContent = info.kicker;
      if (title) title.textContent = info.title;
      if (desc) desc.textContent = info.desc;
      if (stat) stat.textContent = info.stat;

      focusCampusZone3D(zoneKey);
    }

    function enterSelectedCampusZone() {
      const info = CAMPUS_ZONES[selectedCampusZoneKey];
      if (info) switchSpace(info.targetSpace);
    }

    function exploreCampusTour() {
      const keys = Object.keys(CAMPUS_ZONES);
      const nextIndex = (keys.indexOf(selectedCampusZoneKey) + 1) % keys.length;
      selectCampusZone(keys[nextIndex]);
      showToast(`3D Campus Camera focused on ${CAMPUS_ZONES[keys[nextIndex]].title}`);
    }

    function updateHomeKPIs() {
      const threadsEl = document.getElementById('kpi-threads');
      const roomsEl = document.getElementById('kpi-rooms');
      if (threadsEl) threadsEl.textContent = String(appState.assignments.length + appState.researchTopics.length);
      if (roomsEl) roomsEl.textContent = String(appState.meetingRooms.length);
    }

    /* =====================================================================
       ASSIGNMENT HUB
       ===================================================================== */
    function toggleAssignmentForm() {
      const form = document.getElementById('assignment-create-form');
      if (!form) return;
      const isHidden = form.style.display === 'none' || form.style.display === '';
      form.style.display = isHidden ? 'grid' : 'none';
    }

    function setAssignmentCategory(cat) {
      assignmentCategoryFilter = cat;
      document.querySelectorAll('#assign-category-pills .chip-btn').forEach(function (btn) {
        btn.classList.toggle('is-active', btn.dataset.cat === cat);
      });
      const label = document.getElementById('assign-active-cat-label');
      if (label) label.textContent = `Category: ${cat}`;
      renderAssignments();
    }

    function createAssignmentPost(event) {
      event.preventDefault();
      const titleEl = document.getElementById('assign-title');
      const catEl = document.getElementById('assign-category');
      const uniEl = document.getElementById('assign-uni');
      const docEl = document.getElementById('assign-doc');
      const bodyEl = document.getElementById('assign-body');
      if (!titleEl || !catEl || !uniEl || !bodyEl) return;

      const newPost = {
        id: `asg-${Date.now()}`,
        title: titleEl.value.trim(),
        category: catEl.value,
        university: uniEl.value.trim(),
        author: appState.profile.name,
        time: `Just now`,
        docName: docEl && docEl.value.trim() ? docEl.value.trim() : `Assignment_Brief.txt`,
        body: bodyEl.value.trim(),
        upvotes: 1,
        upvoted: true,
        comments: []
      };

      appState.assignments.unshift(newPost);
      titleEl.value = '';
      uniEl.value = '';
      if (docEl) docEl.value = '';
      bodyEl.value = '';
      toggleAssignmentForm();
      renderAssignments();
      updateHomeKPIs();
      updateProfileStats();
      persistState();
      showToast(`Assignment discussion published to ${newPost.category}`);
    }

    function toggleAssignmentUpvote(id) {
      const post = appState.assignments.find(function (p) { return p.id === id; });
      if (!post) return;
      post.upvoted = !post.upvoted;
      post.upvotes += post.upvoted ? 1 : -1;
      renderAssignments();
      persistState();
    }

    function addAssignmentComment(event, id) {
      event.preventDefault();
      const input = document.getElementById(`comment-input-${id}`);
      if (!input || !input.value.trim()) return;
      const post = appState.assignments.find(function (p) { return p.id === id; });
      if (!post) return;
      post.comments.push({
        author: `${appState.profile.name} (${abbreviateUni(appState.profile.university)})`,
        text: input.value.trim()
      });
      input.value = '';
      renderAssignments();
      persistState();
      showToast(`Comment added to discussion`);
    }

    function downloadSharedDocSummary(id) {
      const post = appState.assignments.find(function (p) { return p.id === id; });
      if (!post) return;
      const textContent = `CAMPUS CONNECT — SHARED ASSIGNMENT RESOURCE\nTitle: ${post.title}\nUniversity/Module: ${post.university}\nCategory: ${post.category}\nAuthor: ${post.author}\nAttached File Reference: ${post.docName}\n\nDiscussion Summary:\n${post.body}\n\nPeer Comments (${post.comments.length}):\n${post.comments.map(function (c) { return `- ${c.author}: ${c.text}`; }).join('\n')}\n`;
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === 'function') {
        window.notebookAppApi.triggerFileDownload({
          content: textContent,
          contentType: 'text/plain',
          encoding: 'UTF-8',
          filename: `${post.docName.replace(/[^a-zA-Z0-9._-]/g, '_')}.txt`
        });
      }
      showToast(`Exported resource brief: ${post.docName}`);
    }

    function renderAssignments() {
      const container = document.getElementById('assignments-feed');
      const searchEl = document.getElementById('assign-search');
      const countBadge = document.getElementById('assign-count-badge');
      if (!container) return;

      const query = searchEl ? searchEl.value.trim().toLowerCase() : '';
      const filtered = appState.assignments.filter(function (post) {
        const catOk = assignmentCategoryFilter === 'All' || post.category === assignmentCategoryFilter;
        const textBlob = `${post.title} ${post.university} ${post.body} ${post.docName} ${post.author}`.toLowerCase();
        const searchOk = !query || textBlob.includes(query);
        return catOk && searchOk;
      });

      if (countBadge) countBadge.textContent = `${filtered.length} Discussion${filtered.length === 1 ? '' : 's'}`;

      if (!filtered.length) {
        container.innerHTML = `<div class="glass-panel"><p>No assignment discussions match your filter. Try clearing the search or post a new question.</p></div>`;
        return;
      }

      container.innerHTML = filtered.map(function (post) {
        const commentsHtml = post.comments.map(function (c) {
          return `<div class="comment-item"><strong style="font-size:0.84rem;color:var(--primary);">${escapeHtml(c.author)}</strong><span style="font-size:0.88rem;color:var(--on-surface);">${escapeHtml(c.text)}</span></div>`;
        }).join('');

        return `
          <article class="glass-panel is-interactive">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:var(--space-sm);margin-bottom:var(--space-sm);">
              <div style="display:flex;flex-wrap:wrap;gap:var(--space-xs);align-items:center;">
                <span class="tag">${escapeHtml(post.category)}</span>
                <span class="tag is-purple">${escapeHtml(post.university)}</span>
              </div>
              <span class="mono-label">${escapeHtml(post.author)} · ${escapeHtml(post.time)}</span>
            </div>
            <h3 style="margin-bottom:0.45rem;">${escapeHtml(post.title)}</h3>
            <p style="color:var(--on-surface);margin-bottom:var(--space-md);">${escapeHtml(post.body)}</p>
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:var(--space-sm);">
              <button type="button" class="btn btn-sm" onclick="downloadSharedDocSummary('${post.id}')">
                <span>Shared Doc: ${escapeHtml(post.docName)} (Export Brief)</span>
              </button>
              <button type="button" class="btn btn-sm ${post.upvoted ? 'btn-primary' : ''}" onclick="toggleAssignmentUpvote('${post.id}')">
                <span>Helpful (${post.upvotes})</span>
              </button>
            </div>
            <div class="thread-box">
              <div class="mono-label">Peer Comments (${post.comments.length})</div>
              ${commentsHtml}
              <form style="display:flex;gap:var(--space-xs);align-items:end;" onsubmit="addAssignmentComment(event, '${post.id}')">
                <div class="field-group" style="flex:1;">
                  <label class="field-label" for="comment-input-${post.id}">Add Peer Reply</label>
                  <input class="field-input" id="comment-input-${post.id}" type="text" placeholder="Share a hint, test case, or reference…">
                </div>
                <button type="submit" class="btn btn-purple">Reply</button>
              </form>
            </div>
          </article>
        `;
      }).join('');
    }

    /* =====================================================================
       RESEARCH & THESIS HUB
       ===================================================================== */
    function toggleResearchForm() {
      const form = document.getElementById('research-create-form');
      if (!form) return;
      const isHidden = form.style.display === 'none' || form.style.display === '';
      form.style.display = isHidden ? 'grid' : 'none';
    }

    function toggleSkillMatchOnly() {
      researchSkillMatchOnly = !researchSkillMatchOnly;
      const btn = document.getElementById('res-skill-match-toggle');
      if (btn) {
        btn.classList.toggle('is-active', researchSkillMatchOnly);
        btn.textContent = `Skill Match With My Profile: ${researchSkillMatchOnly ? 'ON' : 'OFF'}`;
      }
      renderResearchHub();
    }

    function createResearchIdea(event) {
      event.preventDefault();
      const titleEl = document.getElementById('res-title');
      const fieldEl = document.getElementById('res-field');
      const uniEl = document.getElementById('res-uni');
      const skillsEl = document.getElementById('res-skills');
      const probEl = document.getElementById('res-problem');
      if (!titleEl || !fieldEl || !uniEl || !skillsEl || !probEl) return;

      const skillsArr = skillsEl.value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      appState.researchTopics.unshift({
        id: `res-${Date.now()}`,
        title: titleEl.value.trim(),
        field: fieldEl.value,
        university: uniEl.value,
        author: appState.profile.name,
        problem: probEl.value.trim(),
        seekingSkills: skillsArr.length ? skillsArr : [`Research`],
        matched: false,
        discussions: []
      });

      titleEl.value = '';
      skillsEl.value = '';
      probEl.value = '';
      toggleResearchForm();
      renderResearchHub();
      updateHomeKPIs();
      persistState();
      showToast(`Research topic published to ${fieldEl.value}`);
    }

    function toggleResearchPartnerMatch(id) {
      const topic = appState.researchTopics.find(function (t) { return t.id === id; });
      if (!topic) return;
      topic.matched = !topic.matched;
      renderResearchHub();
      updateProfileStats();
      persistState();
      showToast(topic.matched ? `Partner request sent to ${topic.author}` : `Partner match withdrawn`);
    }

    function addResearchDiscussion(event, id) {
      event.preventDefault();
      const input = document.getElementById(`res-disc-input-${id}`);
      if (!input || !input.value.trim()) return;
      const topic = appState.researchTopics.find(function (t) { return t.id === id; });
      if (!topic) return;
      topic.discussions.push({
        author: `${appState.profile.name} (${abbreviateUni(appState.profile.university)})`,
        text: input.value.trim()
      });
      input.value = '';
      renderResearchHub();
      persistState();
      showToast(`Methodology note posted`);
    }

    function renderResearchHub() {
      const container = document.getElementById('research-feed');
      const fieldEl = document.getElementById('res-filter-field');
      const uniEl = document.getElementById('res-filter-uni');
      const countBadge = document.getElementById('res-count-badge');
      const hintEl = document.getElementById('res-profile-skills-hint');
      if (!container) return;

      const mySkillsLower = appState.profile.skills.map(function (s) { return s.toLowerCase(); });
      if (hintEl) hintEl.textContent = `Your Skills: ${appState.profile.skills.join(', ')}`;

      const fieldVal = fieldEl ? fieldEl.value : 'All';
      const uniVal = uniEl ? uniEl.value : 'All';

      const filtered = appState.researchTopics.filter(function (topic) {
        const fieldOk = fieldVal === 'All' || topic.field === fieldVal;
        const uniOk = uniVal === 'All' || topic.university === uniVal;
        const matchCount = topic.seekingSkills.filter(function (sk) {
          return mySkillsLower.indexOf(sk.toLowerCase()) !== -1;
        }).length;
        const skillOk = !researchSkillMatchOnly || matchCount > 0;
        return fieldOk && uniOk && skillOk;
      });

      if (countBadge) countBadge.textContent = `${filtered.length} Topic${filtered.length === 1 ? '' : 's'}`;

      if (!filtered.length) {
        container.innerHTML = `<div class="glass-panel"><p>No research topics match the selected field, university, or skill filter.</p></div>`;
        return;
      }

      container.innerHTML = filtered.map(function (topic) {
        const matchedSkills = topic.seekingSkills.filter(function (sk) {
          return mySkillsLower.indexOf(sk.toLowerCase()) !== -1;
        });
        const skillsHtml = topic.seekingSkills.map(function (sk) {
          const isMatch = mySkillsLower.indexOf(sk.toLowerCase()) !== -1;
          return `<span class="tag ${isMatch ? 'is-positive' : 'is-neutral'}">${escapeHtml(sk)}${isMatch ? ' ★' : ''}</span>`;
        }).join('');

        const discHtml = topic.discussions.map(function (d) {
          return `<div class="comment-item"><strong style="font-size:0.84rem;color:var(--primary);">${escapeHtml(d.author)}</strong><span style="font-size:0.86rem;color:var(--on-surface);">${escapeHtml(d.text)}</span></div>`;
        }).join('');

        return `
          <article class="glass-panel is-interactive" style="display:grid;gap:var(--space-sm);align-content:start;">
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:var(--space-xs);">
              <span class="tag is-purple">${escapeHtml(topic.field)}</span>
              ${matchedSkills.length ? `<span class="tag is-positive">${matchedSkills.length} Skill Match</span>` : ''}
            </div>
            <h3>${escapeHtml(topic.title)}</h3>
            <div class="mono-label">${escapeHtml(topic.university)} · Lead: ${escapeHtml(topic.author)}</div>
            <p style="color:var(--on-surface);font-size:0.92rem;">${escapeHtml(topic.problem)}</p>
            <div style="display:grid;gap:0.35rem;">
              <span class="mono-label">Seeking Partner Skills</span>
              <div class="filter-row">${skillsHtml}</div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-xs);">
              <button type="button" class="btn btn-sm ${topic.matched ? 'btn-primary' : 'btn-purple'}" onclick="toggleResearchPartnerMatch('${topic.id}')">
                ${topic.matched ? 'Partner Request Sent' : 'Match as Research Partner'}
              </button>
              <span class="mono-label">${topic.discussions.length} Notes</span>
            </div>
            <div class="thread-box">
              ${discHtml}
              <form style="display:flex;gap:var(--space-xs);align-items:end;" onsubmit="addResearchDiscussion(event, '${topic.id}')">
                <div class="field-group" style="flex:1;">
                  <label class="field-label" for="res-disc-input-${topic.id}">Problem Discussion</label>
                  <input class="field-input" id="res-disc-input-${topic.id}" type="text" placeholder="Suggest dataset or methodology…">
                </div>
                <button type="submit" class="btn btn-sm btn-primary">Post</button>
              </form>
            </div>
          </article>
        `;
      }).join('');
    }

    /* =====================================================================
       PROJECT COLLABORATION LAB
       ===================================================================== */
    function switchLabMode(mode) {
      labMode = mode;
      const projBtn = document.getElementById('lab-tab-projects');
      const memBtn = document.getElementById('lab-tab-members');
      const projGrid = document.getElementById('lab-projects-grid');
      const memGrid = document.getElementById('lab-members-grid');
      if (projBtn) projBtn.classList.toggle('is-active', mode === 'projects');
      if (memBtn) memBtn.classList.toggle('is-active', mode === 'members');
      if (projGrid) projGrid.style.display = mode === 'projects' ? 'grid' : 'none';
      if (memGrid) memGrid.style.display = mode === 'members' ? 'grid' : 'none';
      renderProjectLab();
    }

    function openCreateProjectModal() {
      openModal('modal-create-project');
    }

    function createNewProject(event) {
      event.preventDefault();
      const titleEl = document.getElementById('proj-title');
      const domEl = document.getElementById('proj-domain');
      const stackEl = document.getElementById('proj-stack');
      const rolesEl = document.getElementById('proj-roles');
      const sumEl = document.getElementById('proj-summary');
      if (!titleEl || !domEl || !stackEl || !rolesEl || !sumEl) return;

      const stackArr = stackEl.value.split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      appState.projects.unshift({
        id: `proj-${Date.now()}`,
        title: titleEl.value.trim(),
        domain: domEl.value,
        universities: abbreviateUni(appState.profile.university),
        summary: sumEl.value.trim(),
        stack: stackArr.length ? stackArr : [`Prototype`],
        neededRoles: rolesEl.value.trim(),
        progress: 15,
        members: 1,
        joined: true
      });

      titleEl.value = '';
      stackEl.value = '';
      rolesEl.value = '';
      sumEl.value = '';
      closeModal('modal-create-project');
      switchLabMode('projects');
      updateProfileStats();
      persistState();
      showToast(`Project launched in Collaboration Lab`);
    }

    function toggleJoinProject(id) {
      const proj = appState.projects.find(function (p) { return p.id === id; });
      if (!proj) return;
      proj.joined = !proj.joined;
      proj.members += proj.joined ? 1 : -1;
      renderProjectLab();
      updateProfileStats();
      persistState();
      showToast(proj.joined ? `Joined team: ${proj.title}` : `Left project team`);
    }

    function inviteMemberToLab(name) {
      showToast(`Collaboration invite sent to ${name}`);
    }

    function renderProjectLab() {
      const searchEl = document.getElementById('lab-search-input');
      const q = searchEl ? searchEl.value.trim().toLowerCase() : '';

      const projGrid = document.getElementById('lab-projects-grid');
      if (projGrid) {
        const filteredProjs = appState.projects.filter(function (p) {
          const blob = `${p.title} ${p.domain} ${p.universities} ${p.summary} ${p.stack.join(' ')} ${p.neededRoles}`.toLowerCase();
          return !q || blob.includes(q);
        });
        projGrid.innerHTML = filteredProjs.length ? filteredProjs.map(function (p) {
          const stackTags = p.stack.map(function (s) { return `<span class="tag">${escapeHtml(s)}</span>`; }).join('');
          return `
            <article class="glass-panel is-interactive" style="display:grid;gap:var(--space-sm);align-content:start;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span class="tag is-purple">${escapeHtml(p.domain)}</span>
                <span class="mono-label">${escapeHtml(p.universities)}</span>
              </div>
              <h3>${escapeHtml(p.title)}</h3>
              <p style="color:var(--on-surface);font-size:0.9rem;">${escapeHtml(p.summary)}</p>
              <div class="filter-row">${stackTags}</div>
              <div style="display:grid;gap:4px;">
                <div style="display:flex;justify-content:space-between;">
                  <span class="mono-label">Prototype Milestone</span>
                  <span class="mono-label cyan-accent">${p.progress}%</span>
                </div>
                <div class="progress-track"><div class="progress-fill" style="width:${p.progress}%;"></div></div>
              </div>
              <div class="mono-label">Open Roles: <span style="color:var(--on-surface);">${escapeHtml(p.neededRoles)}</span></div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:var(--space-xs);">
                <span class="mono-label">${p.members} Team Members</span>
                <button type="button" class="btn btn-sm ${p.joined ? 'btn-primary' : 'btn-purple'}" onclick="toggleJoinProject('${p.id}')">
                  ${p.joined ? 'Team Member ✓' : 'Request to Join'}
                </button>
              </div>
            </article>
          `;
        }).join('') : `<div class="glass-panel"><p>No projects matched "${escapeHtml(q)}".</p></div>`;
      }

      const memGrid = document.getElementById('lab-members-grid');
      if (memGrid) {
        const allMembers = [
          {
            name: `${appState.profile.name} (You)`,
            uni: appState.profile.university,
            degree: appState.profile.degree,
            skills: appState.profile.skills,
            isSelf: true
          }
        ].concat(PEER_DIRECTORY);

        const filteredMembers = allMembers.filter(function (m) {
          const blob = `${m.name} ${m.uni} ${m.degree} ${m.skills.join(' ')}`.toLowerCase();
          return !q || blob.includes(q);
        });

        memGrid.innerHTML = filteredMembers.map(function (m) {
          const tags = m.skills.map(function (s) { return `<span class="tag is-purple">${escapeHtml(s)}</span>`; }).join('');
          return `
            <article class="glass-panel is-purple is-interactive" style="display:grid;gap:var(--space-sm);align-content:start;">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <h3>${escapeHtml(m.name)}</h3>
                <span class="tag">${escapeHtml(abbreviateUni(m.uni))}</span>
              </div>
              <p style="font-size:0.86rem;">${escapeHtml(m.uni)} · ${escapeHtml(m.degree)}</p>
              <div class="filter-row">${tags}</div>
              <div style="margin-top:var(--space-xs);">
                ${m.isSelf
                  ? `<button type="button" class="btn btn-sm btn-primary" onclick="switchSpace('profile')">View My Profile</button>`
                  : `<button type="button" class="btn btn-sm btn-purple" onclick="inviteMemberToLab('${escapeHtml(m.name)}')">Invite to Team</button>`}
              </div>
            </article>
          `;
        }).join('');
      }
    }

    /* =====================================================================
       MEETING ROOM UI (ROOM SWITCHER, CHAT, WHITEBOARD)
       ===================================================================== */
    function openCreateRoomModal() {
      openModal('modal-create-room');
    }

    function createNewMeetingRoom(event) {
      event.preventDefault();
      const nameEl = document.getElementById('room-name');
      const topicEl = document.getElementById('room-topic');
      if (!nameEl || !topicEl) return;

      const newRoom = {
        id: `room-${Date.now()}`,
        name: nameEl.value.trim(),
        topic: topicEl.value.trim(),
        whiteboard: [`Topic: ${topicEl.value.trim()}`, `Host: ${appState.profile.name} (${abbreviateUni(appState.profile.university)})`],
        chat: [{ sender: `System`, text: `Room "${nameEl.value.trim()}" created.` }]
      };
      appState.meetingRooms.push(newRoom);
      appState.activeRoomId = newRoom.id;
      nameEl.value = '';
      topicEl.value = '';
      closeModal('modal-create-room');
      renderMeetingUI();
      updateHomeKPIs();
      persistState();
      showToast(`Entered 3D room: ${newRoom.name}`);
    }

    function switchMeetingRoom(roomId) {
      appState.activeRoomId = roomId;
      renderMeetingUI();
      persistState();
    }

    function getActiveRoom() {
      return appState.meetingRooms.find(function (r) { return r.id === appState.activeRoomId; }) || appState.meetingRooms[0];
    }

    function addWhiteboardNote() {
      const input = document.getElementById('whiteboard-note-input');
      if (!input || !input.value.trim()) return;
      const room = getActiveRoom();
      if (!room) return;
      room.whiteboard.push(input.value.trim());
      if (room.whiteboard.length > 6) room.whiteboard.shift();
      input.value = '';
      renderMeetingUI();
      persistState();
      showToast(`Updated 3D wall whiteboard`);
    }

    function sendMeetingChat(event) {
      event.preventDefault();
      const input = document.getElementById('meeting-chat-input');
      if (!input || !input.value.trim()) return;
      const room = getActiveRoom();
      if (!room) return;
      room.chat.push({
        sender: `${appState.profile.name} (${abbreviateUni(appState.profile.university)})`,
        text: input.value.trim()
      });
      input.value = '';
      renderMeetingUI();
      persistState();
    }

    function renderMeetingUI() {
      const room = getActiveRoom();
      if (!room) return;

      const selectEl = document.getElementById('meeting-room-select');
      if (selectEl) {
        selectEl.innerHTML = appState.meetingRooms.map(function (r) {
          return `<option value="${r.id}" ${r.id === room.id ? 'selected' : ''}>${escapeHtml(r.name)}</option>`;
        }).join('');
      }

      const hudTitle = document.getElementById('meeting-room-hud-title');
      if (hudTitle) hudTitle.textContent = room.name;

      // Participants
      const partList = document.getElementById('meeting-participants-list');
      if (partList) {
        const participants = [
          { name: `${appState.profile.name} (You)`, uni: abbreviateUni(appState.profile.university), status: `WASD Active` },
          { name: `Nethmi Jayawardena`, uni: `UOM`, status: `Seated` },
          { name: `Dinithi Karunaratne`, uni: `UOC`, status: `Presenting` },
          { name: `Isuru Bandara`, uni: `PDN`, status: `Seated` },
          { name: `Dilani Fernando`, uni: `KLN`, status: `Notes` }
        ];
        partList.innerHTML = participants.map(function (p) {
          return `<div class="participant-row"><span style="font-size:0.86rem;"><strong>${escapeHtml(p.name)}</strong> · ${escapeHtml(p.uni)}</span><span class="tag is-positive">${escapeHtml(p.status)}</span></div>`;
        }).join('');
      }

      // Whiteboard notes list + redraw 3D wall texture
      const wbList = document.getElementById('whiteboard-notes-list');
      if (wbList) {
        wbList.innerHTML = room.whiteboard.map(function (line) {
          return `<div class="mono-label" style="color:var(--on-surface);padding:3px 6px;background:var(--surface-container-low);border-radius:var(--rounded-sm);">• ${escapeHtml(line)}</div>`;
        }).join('');
      }
      updateWhiteboardTexture3D(room);

      // Chat log
      const chatLog = document.getElementById('meeting-chat-log');
      if (chatLog) {
        chatLog.innerHTML = room.chat.map(function (msg) {
          return `<div class="chat-msg"><strong style="color:var(--primary);">${escapeHtml(msg.sender)}:</strong> <span>${escapeHtml(msg.text)}</span></div>`;
        }).join('');
        chatLog.scrollTop = chatLog.scrollHeight;
      }
    }

    /* =====================================================================
       USER PROFILE PAGE (NEW MAIN ADDITION)
       ===================================================================== */
    function buildVectorPortraitSvgUrl(preset, uniCode) {
      const palettes = {
        scholar: { bg1: '#0b1026', bg2: '#1d1240', accent: '#00f3ff', accent2: '#b026ff', shirt: '#1a2748' },
        engineer: { bg1: '#071422', bg2: '#112a3d', accent: '#00f3ff', accent2: '#2df2a4', shirt: '#163044' },
        researcher: { bg1: '#140c28', bg2: '#261447', accent: '#b026ff', accent2: '#00f3ff', shirt: '#2b1b4a' },
        creator: { bg1: '#100c20', bg2: '#23163b', accent: '#ffd859', accent2: '#b026ff', shirt: '#281d42' }
      };
      const pal = palettes[preset] || palettes.scholar;
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${pal.bg1}"/>
            <stop offset="100%" stop-color="${pal.bg2}"/>
          </linearGradient>
        </defs>
        <rect width="240" height="240" fill="url(#g)"/>
        <circle cx="120" cy="120" r="102" fill="none" stroke="${pal.accent}" stroke-width="2" stroke-opacity="0.45"/>
        <circle cx="120" cy="120" r="88" fill="none" stroke="${pal.accent2}" stroke-width="1.5" stroke-dasharray="8 6" stroke-opacity="0.6"/>
        <path d="M46 232 C46 174 194 174 194 232 Z" fill="${pal.shirt}" stroke="${pal.accent}" stroke-width="2"/>
        <circle cx="120" cy="108" r="42" fill="#e0b596"/>
        <path d="M78 102 C78 60 162 60 162 102 C154 84 86 84 78 102 Z" fill="#18182b"/>
        <rect x="86" y="96" width="68" height="18" rx="9" fill="#0b1024" fill-opacity="0.72" stroke="${pal.accent}" stroke-width="2"/>
        <circle cx="104" cy="105" r="3" fill="${pal.accent}"/>
        <circle cx="136" cy="105" r="3" fill="${pal.accent}"/>
        <path d="M108 128 Q120 136 132 128" fill="none" stroke="#6f4134" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="86" y="196" width="68" height="22" rx="4" fill="#070712" stroke="${pal.accent2}" stroke-width="1.5"/>
        <text x="120" y="211" text-anchor="middle" fill="${pal.accent}" font-family="monospace" font-size="11" font-weight="bold">${uniCode}</text>
      </svg>`;
      return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
    }

    function setProfileAvatarMode(mode) {
      appState.profile.avatarMode = mode;
      renderProfileUI();
      persistState();
    }

    function handlePhotoUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (sessionUploadedPhotoUrl) URL.revokeObjectURL(sessionUploadedPhotoUrl);
      sessionUploadedPhotoUrl = URL.createObjectURL(file);
      appState.profile.avatarMode = 'photo';
      renderProfileUI();
      showToast(`Photo loaded for preview (avatar settings persist safely)`);
    }

    function openEditProfileModal() {
      const p = appState.profile;
      const setVal = function (id, val) {
        const el = document.getElementById(id);
        if (el) el.value = val;
      };
      setVal('edit-prof-name', p.name);
      setVal('edit-prof-uni', p.university);
      setVal('edit-prof-degree', p.degree);
      setVal('edit-prof-research', p.researchTopic);
      setVal('edit-prof-skills', p.skills.join(', '));
      setVal('edit-prof-interests', p.interests.join(', '));
      setVal('edit-prof-bio', p.bio);
      setVal('edit-prof-avatar-mode', p.avatarMode);
      setVal('edit-prof-3d-theme', p.avatarTheme);
      setVal('edit-prof-photo-preset', p.photoPreset);
      openModal('modal-edit-profile');
    }

    function saveProfileChanges(event) {
      event.preventDefault();
      const getVal = function (id) {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
      };

      const skillsArr = getVal('edit-prof-skills').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
      const interestsArr = getVal('edit-prof-interests').split(',').map(function (s) { return s.trim(); }).filter(Boolean);

      appState.profile.name = getVal('edit-prof-name') || appState.profile.name;
      appState.profile.university = getVal('edit-prof-uni') || appState.profile.university;
      appState.profile.degree = getVal('edit-prof-degree') || appState.profile.degree;
      appState.profile.researchTopic = getVal('edit-prof-research') || appState.profile.researchTopic;
      appState.profile.skills = skillsArr.length ? skillsArr : [`Academic Research`];
      appState.profile.interests = interestsArr.length ? interestsArr : [`Collaboration`];
      appState.profile.bio = getVal('edit-prof-bio') || appState.profile.bio;
      appState.profile.avatarMode = getVal('edit-prof-avatar-mode') || '3d';
      appState.profile.avatarTheme = getVal('edit-prof-3d-theme') || 'cyan';
      appState.profile.photoPreset = getVal('edit-prof-photo-preset') || 'scholar';

      closeModal('modal-edit-profile');
      renderProfileUI();
      updateProfileAvatar3DTheme();
      updateMeetingUserAvatarAppearance();
      renderResearchHub();
      renderProjectLab();
      renderMeetingUI();
      persistState();
      showToast(`Profile saved & synced across Campus Connect`);
    }

    function updateProfileStats() {
      const pPosts = document.getElementById('stat-posts');
      const pMatches = document.getElementById('stat-matches');
      const pProjs = document.getElementById('stat-projects');
      if (pPosts) pPosts.textContent = String(appState.assignments.filter(function (a) { return a.author === appState.profile.name; }).length + 1);
      if (pMatches) pMatches.textContent = String(appState.researchTopics.filter(function (r) { return r.matched; }).length);
      if (pProjs) pProjs.textContent = String(appState.projects.filter(function (p) { return p.joined; }).length);
    }

    function exportProfileSummary() {
      const p = appState.profile;
      const summary = `CAMPUS CONNECT — STUDENT PROFILE\nName: ${p.name}\nUniversity: ${p.university}\nDegree: ${p.degree}\nResearch Focus: ${p.researchTopic}\nSkills: ${p.skills.join(', ')}\nInterests: ${p.interests.join(', ')}\n\nBio:\n${p.bio}\n`;
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === 'function') {
        window.notebookAppApi.triggerFileDownload({
          content: summary,
          contentType: 'text/plain',
          encoding: 'UTF-8',
          filename: `${p.name.replace(/[^a-zA-Z0-9_-]/g, '_')}_CampusConnect_Profile.txt`
        });
      }
      showToast(`Profile summary downloaded`);
    }

    function renderProfileUI() {
      const p = appState.profile;
      const hdrName = document.getElementById('header-user-name');
      const hdrUni = document.getElementById('header-user-uni');
      if (hdrName) hdrName.textContent = p.name;
      if (hdrUni) hdrUni.textContent = abbreviateUni(p.university);

      const setTxt = function (id, val) {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
      };
      setTxt('profile-display-name', p.name);
      setTxt('profile-display-uni', p.university);
      setTxt('profile-display-degree', p.degree);
      setTxt('profile-display-bio', p.bio);
      setTxt('profile-display-research', p.researchTopic);

      const skillsEl = document.getElementById('profile-display-skills');
      if (skillsEl) {
        skillsEl.innerHTML = p.skills.map(function (s) {
          return `<span class="tag">${escapeHtml(s)}</span>`;
        }).join('');
      }
      const intEl = document.getElementById('profile-display-interests');
      if (intEl) {
        intEl.innerHTML = p.interests.map(function (i) {
          return `<span class="tag is-purple">${escapeHtml(i)}</span>`;
        }).join('');
      }

      // Avatar mode toggle
      const is3D = p.avatarMode !== 'photo';
      const btn3d = document.getElementById('avatar-mode-3d-btn');
      const btnPhoto = document.getElementById('avatar-mode-photo-btn');
      const wrap3d = document.getElementById('profile-3d-wrap');
      const wrapPhoto = document.getElementById('profile-photo-wrap');
      const photoImg = document.getElementById('profile-photo-img');
      const photoCap = document.getElementById('profile-photo-caption');
      const themeLabel = document.getElementById('profile-3d-theme-label');

      if (btn3d) btn3d.classList.toggle('is-active', is3D);
      if (btnPhoto) btnPhoto.classList.toggle('is-active', !is3D);
      if (wrap3d) wrap3d.style.display = is3D ? 'block' : 'none';
      if (wrapPhoto) wrapPhoto.style.display = is3D ? 'none' : 'grid';

      if (themeLabel) {
        const labels = { cyan: `Cyan Cyber Rig`, purple: `Ultraviolet Scholar`, dual: `Dual-Core Neon` };
        themeLabel.textContent = labels[p.avatarTheme] || `Cyan Cyber Rig`;
      }

      if (photoImg) {
        if (sessionUploadedPhotoUrl) {
          photoImg.src = sessionUploadedPhotoUrl;
          if (photoCap) photoCap.textContent = `Uploaded Profile Photo`;
        } else {
          photoImg.src = buildVectorPortraitSvgUrl(p.photoPreset, abbreviateUni(p.university));
          if (photoCap) photoCap.textContent = `Vector Portrait · ${p.photoPreset.toUpperCase()}`;
        }
      }

      updateProfileStats();
      if (is3D) resizeProfile3D();
    }

    /* =====================================================================
       THREE.JS 1: VIRTUAL CAMPUS (5 INTERACTIVE ZONES)
       ===================================================================== */
    let campusScene, campusCamera, campusRenderer, campusRaycaster, campusPointer;
    let campusZoneMeshes = [];
    let campusTargetLook = new THREE.Vector3(0, 0.8, 0);
    let campusOrbitAngle = 0.65;
    let campusOrbitPitch = 0.55;
    let campusOrbitDist = 18;
    let campusDrag = { active: false, x: 0, y: 0, moved: false };
    let campusAnimStarted = false;

    const ZONE_COORDS = {
      assignment: { x: -5.5, z: -3.5, color: 0x00f3ff },
      research:   { x:  5.5, z: -3.5, color: 0xb026ff },
      meeting:    { x:  0.0, z:  0.0, color: 0x00f3ff },
      lounge:     { x: -5.0, z:  4.5, color: 0x2df2a4 },
      lab:        { x:  5.0, z:  4.5, color: 0xb026ff }
    };

    function initCampus3D() {
      const canvas = document.getElementById('campus-3d-canvas');
      const wrap = document.getElementById('campus-viewport-wrap');
      if (!canvas || !wrap || typeof THREE === 'undefined') return;

      campusScene = new THREE.Scene();
      campusScene.background = new THREE.Color(0x070712);
      campusScene.fog = new THREE.FogExp2(0x070712, 0.025);

      campusCamera = new THREE.PerspectiveCamera(46, wrap.clientWidth / Math.max(1, wrap.clientHeight), 0.1, 120);
      campusRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      campusRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      campusRenderer.setSize(wrap.clientWidth, wrap.clientHeight, false);

      campusRaycaster = new THREE.Raycaster();
      campusPointer = new THREE.Vector2();

      // Lights
      campusScene.add(new THREE.AmbientLight(0x8899cc, 0.9));
      const keyLight = new THREE.DirectionalLight(0x00f3ff, 1.4);
      keyLight.position.set(10, 18, 12);
      campusScene.add(keyLight);
      const fillLight = new THREE.PointLight(0xb026ff, 2.2, 30);
      fillLight.position.set(-8, 8, -6);
      campusScene.add(fillLight);

      // Futuristic campus grid & walkways
      const grid = new THREE.GridHelper(28, 28, 0x00f3ff, 0x1e2244);
      grid.position.y = 0;
      campusScene.add(grid);

      const disc = new THREE.Mesh(
        new THREE.CylinderGeometry(12.5, 12.8, 0.16, 48),
        new THREE.MeshStandardMaterial({ color: 0x0e1024, metalness: 0.4, roughness: 0.7 })
      );
      disc.position.y = -0.09;
      campusScene.add(disc);

      // Build 5 interactive zone buildings
      Object.keys(ZONE_COORDS).forEach(function (key, idx) {
        const cfg = ZONE_COORDS[key];
        const group = new THREE.Group();
        group.position.set(cfg.x, 0, cfg.z);

        const h = key === 'meeting' ? 3.2 : 2.2 + (idx % 2) * 0.5;
        const baseMesh = new THREE.Mesh(
          key === 'meeting' ? new THREE.CylinderGeometry(1.7, 2.0, h, 8) : new THREE.BoxGeometry(2.6, h, 2.6),
          new THREE.MeshStandardMaterial({
            color: 0x141733,
            emissive: cfg.color,
            emissiveIntensity: 0.18,
            roughness: 0.35,
            metalness: 0.6
          })
        );
        baseMesh.position.y = h / 2;
        baseMesh.userData = { zoneKey: key };
        group.add(baseMesh);
        campusZoneMeshes.push(baseMesh);

        // Glowing halo ring
        const halo = new THREE.Mesh(
          new THREE.TorusGeometry(1.9, 0.06, 12, 40),
          new THREE.MeshBasicMaterial({ color: cfg.color })
        );
        halo.rotation.x = Math.PI / 2;
        halo.position.y = h + 0.45;
        halo.userData = { isHalo: true, baseY: h + 0.45, offset: idx * 1.1 };
        group.add(halo);

        // Floating sprite label
        const labelSprite = makeTextSprite(CAMPUS_ZONES[key].title, cfg.color === 0x00f3ff ? '#00f3ff' : (cfg.color === 0x2df2a4 ? '#2df2a4' : '#d68fff'));
        labelSprite.position.set(0, h + 1.45, 0);
        group.add(labelSprite);

        // Glowing pathway line to center
        if (key !== 'meeting') {
          const pts = [new THREE.Vector3(0, 0.05, 0), new THREE.Vector3(cfg.x, 0.05, cfg.z)];
          const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
          const line = new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.55 }));
          campusScene.add(line);
        }

        campusScene.add(group);
      });

      // Pointer drag & click raycast
      canvas.addEventListener('pointerdown', function (e) {
        campusDrag = { active: true, x: e.clientX, y: e.clientY, moved: false };
      });
      window.addEventListener('pointermove', function (e) {
        if (!campusDrag.active) return;
        const dx = e.clientX - campusDrag.x;
        const dy = e.clientY - campusDrag.y;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) campusDrag.moved = true;
        campusOrbitAngle -= dx * 0.006;
        campusOrbitPitch = Math.max(0.22, Math.min(1.2, campusOrbitPitch + dy * 0.005));
        campusDrag.x = e.clientX;
        campusDrag.y = e.clientY;
      });
      window.addEventListener('pointerup', function (e) {
        if (!campusDrag.active) return;
        const wasMoved = campusDrag.moved;
        campusDrag.active = false;
        if (!wasMoved && appState.activeSpace === 'campus') {
          const rect = canvas.getBoundingClientRect();
          campusPointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          campusPointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          campusRaycaster.setFromCamera(campusPointer, campusCamera);
          const hits = campusRaycaster.intersectObjects(campusZoneMeshes, false);
          if (hits.length > 0 && hits[0].object.userData.zoneKey) {
            selectCampusZone(hits[0].object.userData.zoneKey);
          }
        }
      });

      if (!campusAnimStarted) {
        campusAnimStarted = true;
        animateCampus3D();
      }
    }

    function focusCampusZone3D(zoneKey) {
      const c = ZONE_COORDS[zoneKey];
      if (!c) return;
      campusTargetLook.set(c.x * 0.45, 0.9, c.z * 0.45);
      campusZoneMeshes.forEach(function (m) {
        if (m.material) {
          m.material.emissiveIntensity = m.userData.zoneKey === zoneKey ? 0.55 : 0.16;
        }
      });
    }

    function resetCampusCamera() {
      campusTargetLook.set(0, 0.8, 0);
      campusOrbitAngle = 0.65;
      campusOrbitPitch = 0.55;
      campusOrbitDist = 18;
    }

    function resizeCampus3D() {
      const wrap = document.getElementById('campus-viewport-wrap');
      if (!wrap || !campusRenderer || !campusCamera) return;
      const w = Math.max(1, wrap.clientWidth);
      const h = Math.max(1, wrap.clientHeight);
      campusCamera.aspect = w / h;
      campusCamera.updateProjectionMatrix();
      campusRenderer.setSize(w, h, false);
    }

    function animateCampus3D(time) {
      requestAnimationFrame(animateCampus3D);
      if (appState.activeSpace !== 'campus' || !campusRenderer || !campusScene || !campusCamera) return;

      const t = (time || 0) * 0.001;
      campusScene.traverse(function (obj) {
        if (obj.userData && obj.userData.isHalo) {
          obj.position.y = obj.userData.baseY + Math.sin(t * 2 + obj.userData.offset) * 0.15;
          obj.rotation.z = t * 0.5;
        }
      });

      const camX = campusTargetLook.x + Math.sin(campusOrbitAngle) * Math.cos(campusOrbitPitch) * campusOrbitDist;
      const camY = campusTargetLook.y + Math.sin(campusOrbitPitch) * campusOrbitDist;
      const camZ = campusTargetLook.z + Math.cos(campusOrbitAngle) * Math.cos(campusOrbitPitch) * campusOrbitDist;
      campusCamera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.12);
      campusCamera.lookAt(campusTargetLook);
      campusRenderer.render(campusScene, campusCamera);
    }

    /* =====================================================================
       THREE.JS 2: 3D VIRTUAL MEETING ROOM (AVATARS + WASD + SCREENS)
       ===================================================================== */
    let meetScene, meetCamera, meetRenderer;
    let meetUserAvatar, meetPeerAvatars = [];
    let meetUserNameplate = null;
    let meetWbTexture, meetWbCanvas, meetWbCtx;
    let meetScreenTexture, meetScreenCanvas, meetScreenCtx;
    let meetSlideIndex = 0;
    let meetWaveTimer = 0;
    let meetKeys = { w: false, a: false, s: false, d: false };
    let meetCamAngle = 0;
    let meetCamPitch = 0.35;
    let meetDrag = { active: false, x: 0, y: 0 };
    let meetAnimStarted = false;

    const SLIDE_DECKS = [
      { title: `Sinhala-English Code-Mixed ASR`, metric: `WER reduced 34.2% -> 18.6%`, bullet1: `LoRA Adapter Rank = 16`, bullet2: `12h UOM & UCSC Lecture Corpus` },
      { title: `Smart Microgrid Load Forecast`, metric: `Peak RMSE: 4.1 kW (24h horizon)`, bullet1: `Monaragala 35kW Solar Cluster`, bullet2: `Edge Raspberry Pi Inference` },
      { title: `Cross-Campus 3D Study Protocol`, metric: `Latency < 42ms on Campus 4G`, bullet1: `Procedural Three.js Mesh Cache`, bullet2: `Live Whiteboard Sync Enabled` }
    ];

    function buildStudentAvatarMesh(bodyColor, accentColor, labelText) {
      const group = new THREE.Group();

      const torso = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28, 0.34, 0.9, 12),
        new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.4, metalness: 0.3 })
      );
      torso.position.y = 0.85;
      group.add(torso);

      const collar = new THREE.Mesh(
        new THREE.TorusGeometry(0.24, 0.035, 8, 24),
        new THREE.MeshBasicMaterial({ color: accentColor })
      );
      collar.rotation.x = Math.PI / 2;
      collar.position.y = 1.28;
      group.add(collar);

      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 18, 18),
        new THREE.MeshStandardMaterial({ color: 0xd9b092, roughness: 0.5 })
      );
      head.position.y = 1.56;
      group.add(head);

      const visor = new THREE.Mesh(
        new THREE.BoxGeometry(0.36, 0.1, 0.16),
        new THREE.MeshBasicMaterial({ color: accentColor })
      );
      visor.position.set(0, 1.58, 0.17);
      group.add(visor);

      const leftArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.65, 8),
        new THREE.MeshStandardMaterial({ color: bodyColor })
      );
      leftArm.position.set(-0.38, 0.9, 0);
      group.add(leftArm);

      const rightArm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.65, 8),
        new THREE.MeshStandardMaterial({ color: bodyColor })
      );
      rightArm.position.set(0.38, 0.9, 0);
      group.add(rightArm);
      group.userData.rightArm = rightArm;
      group.userData.torso = torso;
      group.userData.collar = collar;
      group.userData.visor = visor;

      const sprite = makeTextSprite(labelText, '#eef2ff');
      sprite.position.set(0, 2.15, 0);
      group.add(sprite);
      group.userData.nameplate = sprite;

      return group;
    }

    function initMeeting3D() {
      const canvas = document.getElementById('meeting-3d-canvas');
      const wrap = document.getElementById('meeting-viewport-wrap');
      if (!canvas || !wrap || typeof THREE === 'undefined') return;

      meetScene = new THREE.Scene();
      meetScene.background = new THREE.Color(0x070815);
      meetScene.fog = new THREE.FogExp2(0x070815, 0.028);

      meetCamera = new THREE.PerspectiveCamera(52, wrap.clientWidth / Math.max(1, wrap.clientHeight), 0.1, 100);
      meetRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      meetRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      meetRenderer.setSize(wrap.clientWidth, wrap.clientHeight, false);

      meetScene.add(new THREE.AmbientLight(0x9fb0df, 0.95));
      const overhead = new THREE.PointLight(0x00f3ff, 2.0, 28);
      overhead.position.set(0, 6.2, 0);
      meetScene.add(overhead);
      const purpleRim = new THREE.PointLight(0xb026ff, 1.8, 25);
      purpleRim.position.set(-6, 4.5, -5);
      meetScene.add(purpleRim);

      // Room Floor & Grid
      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(18, 18),
        new THREE.MeshStandardMaterial({ color: 0x0d1024, roughness: 0.75, metalness: 0.25 })
      );
      floor.rotation.x = -Math.PI / 2;
      meetScene.add(floor);
      meetScene.add(new THREE.GridHelper(18, 18, 0x00f3ff, 0x202448));

      // Back Wall + Side Glass Pillars
      const backWall = new THREE.Mesh(
        new THREE.BoxGeometry(16, 5.5, 0.25),
        new THREE.MeshStandardMaterial({ color: 0x10132a, roughness: 0.7 })
      );
      backWall.position.set(0, 2.75, -7.2);
      meetScene.add(backWall);

      // Central Conference Table
      const tableTop = new THREE.Mesh(
        new THREE.BoxGeometry(5.6, 0.16, 2.8),
        new THREE.MeshStandardMaterial({ color: 0x181c38, roughness: 0.25, metalness: 0.65 })
      );
      tableTop.position.set(0, 0.92, -0.5);
      meetScene.add(tableTop);

      const tableGlow = new THREE.Mesh(
        new THREE.BoxGeometry(5.7, 0.05, 2.9),
        new THREE.MeshBasicMaterial({ color: 0x00f3ff })
      );
      tableGlow.position.set(0, 0.85, -0.5);
      meetScene.add(tableGlow);

      const tablePedestal = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.75, 0.85, 16),
        new THREE.MeshStandardMaterial({ color: 0x101226 })
      );
      tablePedestal.position.set(0, 0.42, -0.5);
      meetScene.add(tablePedestal);

      // Digital Presentation Screen (Left-Front Wall)
      meetScreenCanvas = document.createElement('canvas');
      meetScreenCanvas.width = 512;
      meetScreenCanvas.height = 256;
      meetScreenCtx = meetScreenCanvas.getContext('2d');
      meetScreenTexture = new THREE.CanvasTexture(meetScreenCanvas);
      drawDigitalScreenSlide();

      const screenMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(4.6, 2.3),
        new THREE.MeshBasicMaterial({ map: meetScreenTexture })
      );
      screenMesh.position.set(-2.9, 2.6, -7.02);
      meetScene.add(screenMesh);

      const screenFrame = new THREE.Mesh(
        new THREE.BoxGeometry(4.8, 2.5, 0.08),
        new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true })
      );
      screenFrame.position.set(-2.9, 2.6, -7.04);
      meetScene.add(screenFrame);

      // Interactive Virtual Whiteboard (Right-Front Wall)
      meetWbCanvas = document.createElement('canvas');
      meetWbCanvas.width = 512;
      meetWbCanvas.height = 256;
      meetWbCtx = meetWbCanvas.getContext('2d');
      meetWbTexture = new THREE.CanvasTexture(meetWbCanvas);

      const wbMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(4.6, 2.3),
        new THREE.MeshBasicMaterial({ map: meetWbTexture })
      );
      wbMesh.position.set(2.9, 2.6, -7.02);
      meetScene.add(wbMesh);

      const wbFrame = new THREE.Mesh(
        new THREE.BoxGeometry(4.8, 2.5, 0.08),
        new THREE.MeshBasicMaterial({ color: 0xb026ff, wireframe: true })
      );
      wbFrame.position.set(2.9, 2.6, -7.04);
      meetScene.add(wbFrame);

      // Peer Student Avatars seated/standing around table
      const peerConfigs = [
        { name: `Nethmi (UOM)`, x: -2.0, z: -2.5, rot: 0.2, color: 0x262b56, accent: 0x00f3ff },
        { name: `Dinithi (UOC)`, x: 0.2, z: -2.7, rot: 0, color: 0x2f1e52, accent: 0xb026ff },
        { name: `Isuru (PDN)`, x: 2.2, z: -2.4, rot: -0.25, color: 0x1b344d, accent: 0x2df2a4 },
        { name: `Dilani (KLN)`, x: -3.5, z: -0.5, rot: 1.35, color: 0x38204d, accent: 0xffd859 }
      ];
      peerConfigs.forEach(function (pc, idx) {
        const av = buildStudentAvatarMesh(pc.color, pc.accent, pc.name);
        av.position.set(pc.x, 0, pc.z);
        av.rotation.y = pc.rot;
        av.userData.phase = idx * 1.4;
        meetScene.add(av);
        meetPeerAvatars.push(av);
      });

      // User's Controllable 3D Student Avatar
      meetUserAvatar = buildStudentAvatarMesh(0x182b4d, 0x00f3ff, `${appState.profile.name} (You)`);
      meetUserAvatar.position.set(0, 0, 4.2);
      meetUserAvatar.rotation.y = Math.PI;
      meetScene.add(meetUserAvatar);
      updateMeetingUserAvatarAppearance();

      // Keyboard WASD controls (only when user isn't typing in an input/textarea)
      window.addEventListener('keydown', function (e) {
        if (appState.activeSpace !== 'meeting') return;
        const tag = document.activeElement ? document.activeElement.tagName : '';
        if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
        const k = e.key.toLowerCase();
        if (k === 'w' || k === 'a' || k === 's' || k === 'd') meetKeys[k] = true;
      });
      window.addEventListener('keyup', function (e) {
        const k = e.key.toLowerCase();
        if (k === 'w' || k === 'a' || k === 's' || k === 'd') meetKeys[k] = false;
      });

      // Mouse drag orbit inside Meeting Room
      canvas.addEventListener('pointerdown', function (e) {
        meetDrag = { active: true, x: e.clientX, y: e.clientY };
      });
      window.addEventListener('pointermove', function (e) {
        if (!meetDrag.active || appState.activeSpace !== 'meeting') return;
        meetCamAngle -= (e.clientX - meetDrag.x) * 0.006;
        meetCamPitch = Math.max(0.15, Math.min(0.85, meetCamPitch + (e.clientY - meetDrag.y) * 0.004));
        meetDrag.x = e.clientX;
        meetDrag.y = e.clientY;
      });
      window.addEventListener('pointerup', function () {
        meetDrag.active = false;
      });

      updateWhiteboardTexture3D(getActiveRoom());
      if (!meetAnimStarted) {
        meetAnimStarted = true;
        animateMeeting3D();
      }
    }

    function updateMeetingUserAvatarAppearance() {
      if (!meetUserAvatar) return;
      const themeColors = {
        cyan: { torso: 0x162b4d, accent: 0x00f3ff },
        purple: { torso: 0x2d184d, accent: 0xb026ff },
        dual: { torso: 0x1c204a, accent: 0x2df2a4 }
      };
      const cfg = themeColors[appState.profile.avatarTheme] || themeColors.cyan;
      if (meetUserAvatar.userData.torso) meetUserAvatar.userData.torso.material.color.setHex(cfg.torso);
      if (meetUserAvatar.userData.collar) meetUserAvatar.userData.collar.material.color.setHex(cfg.accent);
      if (meetUserAvatar.userData.visor) meetUserAvatar.userData.visor.material.color.setHex(cfg.accent);

      if (meetUserAvatar.userData.nameplate) {
        meetUserAvatar.remove(meetUserAvatar.userData.nameplate);
      }
      const newSprite = makeTextSprite(`${appState.profile.name} (${abbreviateUni(appState.profile.university)})`, '#00f3ff');
      newSprite.position.set(0, 2.15, 0);
      meetUserAvatar.add(newSprite);
      meetUserAvatar.userData.nameplate = newSprite;
    }

    function drawDigitalScreenSlide() {
      if (!meetScreenCtx || !meetScreenTexture) return;
      const slide = SLIDE_DECKS[meetSlideIndex % SLIDE_DECKS.length];
      meetScreenCtx.fillStyle = '#090d22';
      meetScreenCtx.fillRect(0, 0, 512, 256);
      meetScreenCtx.strokeStyle = '#00f3ff';
      meetScreenCtx.lineWidth = 4;
      meetScreenCtx.strokeRect(8, 8, 496, 240);

      meetScreenCtx.fillStyle = '#00f3ff';
      meetScreenCtx.font = 'bold 20px monospace';
      meetScreenCtx.fillText(`CAMPUS CONNECT · LIVE SCREEN ${meetSlideIndex + 1}/3`, 26, 44);

      meetScreenCtx.fillStyle = '#eef2ff';
      meetScreenCtx.font = 'bold 26px sans-serif';
      meetScreenCtx.fillText(slide.title, 26, 92);

      meetScreenCtx.fillStyle = '#2df2a4';
      meetScreenCtx.font = 'bold 22px monospace';
      meetScreenCtx.fillText(slide.metric, 26, 138);

      meetScreenCtx.fillStyle = '#a6b0cf';
      meetScreenCtx.font = '18px sans-serif';
      meetScreenCtx.fillText(`• ${slide.bullet1}`, 26, 182);
      meetScreenCtx.fillText(`• ${slide.bullet2}`, 26, 214);
      meetScreenTexture.needsUpdate = true;

      const ind = document.getElementById('meeting-slide-indicator');
      if (ind) ind.textContent = `Digital Screen: Slide ${meetSlideIndex + 1}/3`;
    }

    function updateWhiteboardTexture3D(room) {
      if (!meetWbCtx || !meetWbTexture || !room) return;
      meetWbCtx.fillStyle = '#110f24';
      meetWbCtx.fillRect(0, 0, 512, 256);
      meetWbCtx.strokeStyle = '#b026ff';
      meetWbCtx.lineWidth = 4;
      meetWbCtx.strokeRect(8, 8, 496, 240);

      meetWbCtx.fillStyle = '#d68fff';
      meetWbCtx.font = 'bold 20px monospace';
      meetWbCtx.fillText(`VIRTUAL WHITEBOARD · ${room.topic.slice(0, 26)}`, 24, 42);

      meetWbCtx.fillStyle = '#eef2ff';
      meetWbCtx.font = '17px sans-serif';
      room.whiteboard.slice(-5).forEach(function (line, idx) {
        meetWbCtx.fillText(`• ${line.slice(0, 46)}`, 24, 84 + idx * 32);
      });
      meetWbTexture.needsUpdate = true;
    }

    function setTouchMove(key, active) {
      meetKeys[key] = active;
    }

    function triggerAvatarWave() {
      meetWaveTimer = 1.6;
      showToast(`Your 3D avatar waved to the room!`);
    }

    function cyclePresentationSlide() {
      meetSlideIndex = (meetSlideIndex + 1) % SLIDE_DECKS.length;
      drawDigitalScreenSlide();
    }

    function resetMeetingAvatar() {
      if (!meetUserAvatar) return;
      meetUserAvatar.position.set(0, 0, 4.2);
      meetUserAvatar.rotation.y = Math.PI;
      meetCamAngle = 0;
      meetCamPitch = 0.35;
    }

    function resizeMeeting3D() {
      const wrap = document.getElementById('meeting-viewport-wrap');
      if (!wrap || !meetRenderer || !meetCamera) return;
      const w = Math.max(1, wrap.clientWidth);
      const h = Math.max(1, wrap.clientHeight);
      meetCamera.aspect = w / h;
      meetCamera.updateProjectionMatrix();
      meetRenderer.setSize(w, h, false);
    }

    function animateMeeting3D(time) {
      requestAnimationFrame(animateMeeting3D);
      if (appState.activeSpace !== 'meeting' || !meetRenderer || !meetScene || !meetCamera || !meetUserAvatar) return;

      const t = (time || 0) * 0.001;
      const speed = 0.085;
      let moveX = 0;
      let moveZ = 0;
      if (meetKeys.w) moveZ -= 1;
      if (meetKeys.s) moveZ += 1;
      if (meetKeys.a) moveX -= 1;
      if (meetKeys.d) moveX += 1;

      if (moveX !== 0 || moveZ !== 0) {
        const len = Math.hypot(moveX, moveZ);
        const nx = moveX / len;
        const nz = moveZ / len;
        const sinA = Math.sin(meetCamAngle);
        const cosA = Math.cos(meetCamAngle);
        const worldDX = (nx * cosA + nz * sinA) * speed;
        const worldDZ = (-nx * sinA + nz * cosA) * speed;

        meetUserAvatar.position.x = Math.max(-7.5, Math.min(7.5, meetUserAvatar.position.x + worldDX));
        meetUserAvatar.position.z = Math.max(-5.8, Math.min(7.5, meetUserAvatar.position.z + worldDZ));
        meetUserAvatar.rotation.y = Math.atan2(worldDX, worldDZ);
        meetUserAvatar.position.y = Math.abs(Math.sin(t * 10)) * 0.08;
      } else {
        meetUserAvatar.position.y = Math.sin(t * 2.2) * 0.03;
      }

      if (meetWaveTimer > 0 && meetUserAvatar.userData.rightArm) {
        meetWaveTimer -= 0.016;
        meetUserAvatar.userData.rightArm.rotation.z = -2.2 + Math.sin(t * 14) * 0.45;
      } else if (meetUserAvatar.userData.rightArm) {
        meetUserAvatar.userData.rightArm.rotation.z = 0;
      }

      // Subtle peer avatar idle animation
      meetPeerAvatars.forEach(function (av) {
        av.position.y = Math.sin(t * 2 + (av.userData.phase || 0)) * 0.04;
      });

      const coordsEl = document.getElementById('meeting-avatar-coords');
      if (coordsEl) {
        coordsEl.textContent = `Avatar Pos: X ${meetUserAvatar.position.x.toFixed(1)} · Z ${meetUserAvatar.position.z.toFixed(1)}`;
      }

      const dist = 5.4;
      const camX = meetUserAvatar.position.x + Math.sin(meetCamAngle) * dist;
      const camY = 2.1 + meetCamPitch * 3.2;
      const camZ = meetUserAvatar.position.z + Math.cos(meetCamAngle) * dist;
      meetCamera.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.14);
      meetCamera.lookAt(meetUserAvatar.position.x, 1.35, meetUserAvatar.position.z - 1.2);
      meetRenderer.render(meetScene, meetCamera);
    }

    /* =====================================================================
       THREE.JS 3: PROFILE 3D STUDENT AVATAR PREVIEW
       ===================================================================== */
    let profScene, profCamera, profRenderer, profAvatarGroup;
    let profAnimStarted = false;
    let profSpinOffset = 0;
    let profDrag = { active: false, x: 0 };

    function initProfile3D() {
      const canvas = document.getElementById('profile-3d-canvas');
      const wrap = document.getElementById('profile-3d-wrap');
      if (!canvas || !wrap || typeof THREE === 'undefined') return;

      profScene = new THREE.Scene();
      profScene.background = new THREE.Color(0x0a0c1e);

      profCamera = new THREE.PerspectiveCamera(40, wrap.clientWidth / Math.max(1, wrap.clientHeight), 0.1, 50);
      profCamera.position.set(0, 1.35, 3.4);
      profCamera.lookAt(0, 1.05, 0);

      profRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
      profRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      profRenderer.setSize(wrap.clientWidth, wrap.clientHeight, false);

      profScene.add(new THREE.AmbientLight(0x9fb0df, 1.1));
      const pLight1 = new THREE.PointLight(0x00f3ff, 2.2, 15);
      pLight1.position.set(2.5, 3, 3);
      profScene.add(pLight1);
      const pLight2 = new THREE.PointLight(0xb026ff, 2.0, 15);
      pLight2.position.set(-2.5, 2, -2);
      profScene.add(pLight2);

      // Pedestal
      const baseRing = new THREE.Mesh(
        new THREE.TorusGeometry(0.85, 0.04, 10, 36),
        new THREE.MeshBasicMaterial({ color: 0x00f3ff })
      );
      baseRing.rotation.x = Math.PI / 2;
      baseRing.position.y = 0.05;
      profScene.add(baseRing);

      profAvatarGroup = buildStudentAvatarMesh(0x162b4d, 0x00f3ff, abbreviateUni(appState.profile.university));
      profScene.add(profAvatarGroup);
      updateProfileAvatar3DTheme();

      canvas.addEventListener('pointerdown', function (e) {
        profDrag = { active: true, x: e.clientX };
      });
      window.addEventListener('pointermove', function (e) {
        if (!profDrag.active) return;
        profSpinOffset += (e.clientX - profDrag.x) * 0.012;
        profDrag.x = e.clientX;
      });
      window.addEventListener('pointerup', function () {
        profDrag.active = false;
      });

      if (!profAnimStarted) {
        profAnimStarted = true;
        animateProfile3D();
      }
    }

    function updateProfileAvatar3DTheme() {
      if (!profAvatarGroup) return;
      const themes = {
        cyan: { torso: 0x162b4d, accent: 0x00f3ff },
        purple: { torso: 0x2d184d, accent: 0xb026ff },
        dual: { torso: 0x1c204a, accent: 0x2df2a4 }
      };
      const cfg = themes[appState.profile.avatarTheme] || themes.cyan;
      if (profAvatarGroup.userData.torso) profAvatarGroup.userData.torso.material.color.setHex(cfg.torso);
      if (profAvatarGroup.userData.collar) profAvatarGroup.userData.collar.material.color.setHex(cfg.accent);
      if (profAvatarGroup.userData.visor) profAvatarGroup.userData.visor.material.color.setHex(cfg.accent);

      if (profAvatarGroup.userData.nameplate) {
        profAvatarGroup.remove(profAvatarGroup.userData.nameplate);
      }
      const badge = makeTextSprite(abbreviateUni(appState.profile.university), '#00f3ff');
      badge.position.set(0, 2.15, 0);
      profAvatarGroup.add(badge);
      profAvatarGroup.userData.nameplate = badge;
    }

    function resizeProfile3D() {
      const wrap = document.getElementById('profile-3d-wrap');
      if (!wrap || !profRenderer || !profCamera) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w <= 0 || h <= 0) return;
      profCamera.aspect = w / h;
      profCamera.updateProjectionMatrix();
      profRenderer.setSize(w, h, false);
    }

    function animateProfile3D(time) {
      requestAnimationFrame(animateProfile3D);
      if (appState.activeSpace !== 'profile' || appState.profile.avatarMode === 'photo') return;
      if (!profRenderer || !profScene || !profCamera || !profAvatarGroup) return;

      const t = (time || 0) * 0.001;
      profAvatarGroup.rotation.y = Math.sin(t * 0.7) * 0.45 + profSpinOffset;
      profAvatarGroup.position.y = Math.sin(t * 2.0) * 0.04;
      profRenderer.render(profScene, profCamera);
    }

    /* =====================================================================
       UTILITIES
       ===================================================================== */
    function makeTextSprite(text, colorHex) {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 96;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'rgba(7, 7, 18, 0.84)';
      ctx.fillRect(16, 16, 480, 64);
      ctx.strokeStyle = colorHex || '#00f3ff';
      ctx.lineWidth = 3;
      ctx.strokeRect(16, 16, 480, 64);
      ctx.fillStyle = colorHex || '#eef2ff';
      ctx.font = 'bold 26px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(String(text).slice(0, 28), 256, 48);

      const tex = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(2.8, 0.55, 1);
      return sprite;
    }

    function abbreviateUni(uni) {
      const map = {
        'University of Moratuwa': 'UOM',
        'University of Colombo': 'UOC',
        'University of Peradeniya': 'PDN',
        'University of Kelaniya': 'KLN',
        'SLIIT': 'SLIIT',
        'University of Sri Jayewardenepura': 'USJ',
        'University of Ruhuna': 'RUH',
        'University of Jaffna': 'UOJ',
        'NSBM Green University': 'NSBM',
        'IIT Sri Lanka': 'IIT'
      };
      return map[uni] || uni.slice(0, 6).toUpperCase();
    }

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    /* =====================================================================
       BOOTSTRAP & INITIALIZATION
       ===================================================================== */
    async function initApp() {
      try {
        if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === 'function') {
          const saved = await window.notebookAppApi.getAppState();
          if (saved && typeof saved === 'object') {
            if (saved.profile) appState.profile = Object.assign({}, appState.profile, saved.profile);
            if (Array.isArray(saved.assignments)) appState.assignments = saved.assignments;
            if (Array.isArray(saved.researchTopics)) appState.researchTopics = saved.researchTopics;
            if (Array.isArray(saved.projects)) appState.projects = saved.projects;
            if (Array.isArray(saved.meetingRooms) && saved.meetingRooms.length) appState.meetingRooms = saved.meetingRooms;
            if (saved.activeRoomId) appState.activeRoomId = saved.activeRoomId;
            if (saved.activeSpace) appState.activeSpace = saved.activeSpace;
          }
        }
      } catch (err) {
        // Fallback to seed state cleanly
      }

      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      initCampus3D();
      initMeeting3D();
      initProfile3D();

      renderAssignments();
      renderResearchHub();
      renderProjectLab();
      renderMeetingUI();
      renderProfileUI();
      updateHomeKPIs();
      selectCampusZone('assignment');
      switchSpace(appState.activeSpace || 'campus');

      window.addEventListener('resize', function () {
        resizeCampus3D();
        resizeMeeting3D();
        resizeProfile3D();
      });

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === 'function') {
        window.notebookAppApi.notifyAppReady();
      }
    }

    document.addEventListener('DOMContentLoaded', initApp);