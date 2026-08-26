import type { Publication } from "@/types";

export const publication: Publication = {
  title:
    "Smartphone-Based Real-Time Crowd Monitoring System for Smart City Applications",
  venue: "SSRN (Elsevier)",
  date: "April 2026",
  authorNote: "Sole author",
  description:
    "Proposes a smartphone-based crowd monitoring framework for smart city applications, covering system architecture, an Android implementation using the Camera2 API, and a scalable YOLO + TensorFlow Lite pipeline for real-time on-device crowd estimation.",
  highlights: [
    "Android implementation using the Camera2 API",
    "YOLO + TensorFlow Lite pipeline for on-device inference",
    "Real-time crowd estimation without server round-trips",
    "Architecture designed to extend toward AI-based person detection",
  ],
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6573558",
};
