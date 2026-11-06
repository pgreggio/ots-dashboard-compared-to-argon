Dashboards in Gemini 4 Argon & Revelo Redesign OTS

View:     python3 -m http.server 8000   →  http://localhost:8000
Rebuild:  python3 -I build_dashboards.py . ../dashboard_viewer_downloads
          (reads ../sample_dashboard.jsonl; downloads go to ../dashboard_viewer_downloads and are reused)

dashboards/<id>/argon.html            Argon single-shot model answer
dashboards/<id>/redesign/index.html   Revelo Redesign final submission
trajectories/<id>-argon.json          prompt + initial model evaluation
trajectories/<id>-redesign.json       build turns, review chain, final rubric results, complete ATIF trajectory
