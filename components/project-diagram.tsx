import {
  ArrowRight,
  Binary,
  Braces,
  Database,
  FileCheck2,
  Fingerprint,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UserRound,
  Waypoints,
} from "lucide-react";
import type { Project } from "@/content/portfolio";

export function ProjectDiagram({ type }: { type: Project["diagram"] }) {
  if (type === "review")
    return (
      <div
        className="architecture architecture-agent"
        aria-label="Architecture sketch: a GitHub pull request diff and bounded source context feed a LangGraph reviewer and validated findings"
      >
        <div className="diagram-bar">
          <span>
            <span className="diagram-dot" /> ai-pr-review / code review
          </span>
          <span>ARCHITECTURE SKETCH</span>
        </div>
        <div className="agent-flow">
          <div className="tool-stack">
            <div>
              <Braces size={17} />
              <span>PR metadata</span>
            </div>
            <div>
              <Binary size={17} />
              <span>Changed diff</span>
            </div>
            <div>
              <Database size={17} />
              <span>File context</span>
            </div>
            <span className="diagram-footnote">GITHUB API</span>
          </div>
          <div className="flow-connector">
            <span />
            <ArrowRight size={15} />
          </div>
          <div className="agent-core">
            <div className="core-symbol">
              <Waypoints size={29} strokeWidth={1.2} />
            </div>
            <strong>LangGraph reviewer</strong>
            <span>Bounded tool calls</span>
          </div>
          <div className="flow-connector">
            <span />
            <ArrowRight size={15} />
          </div>
          <div className="report-node">
            <FileCheck2 size={26} strokeWidth={1.2} />
            <strong>Structured findings</strong>
            <span>Changed-line checks</span>
          </div>
        </div>
        <div className="diagram-bottom">
          <span>
            <ShieldCheck size={13} /> Location validation
          </span>
          <span>5 tool calls max · 150 lines per lookup</span>
        </div>
      </div>
    );

  if (type === "agent")
    return (
      <div
        className="architecture architecture-agent"
        aria-label="Architecture sketch: read-only security tools feed a bounded agent and a validated report"
      >
        <div className="diagram-bar">
          <span>
            <span className="diagram-dot" /> threatlens / investigation
          </span>
          <span>ARCHITECTURE SKETCH</span>
        </div>
        <div className="agent-flow">
          <div className="tool-stack">
            <div>
              <Fingerprint size={17} />
              <span>Auth events</span>
            </div>
            <div>
              <UserRound size={17} />
              <span>User timeline</span>
            </div>
            <div>
              <Database size={17} />
              <span>Resource access</span>
            </div>
            <span className="diagram-footnote">READ-ONLY TOOLS</span>
          </div>
          <div className="flow-connector">
            <span />
            <ArrowRight size={15} />
          </div>
          <div className="agent-core">
            <div className="core-symbol">
              <Waypoints size={29} strokeWidth={1.2} />
            </div>
            <strong>Investigation agent</strong>
            <span>Bounded reasoning loop</span>
          </div>
          <div className="flow-connector">
            <span />
            <ArrowRight size={15} />
          </div>
          <div className="report-node">
            <FileCheck2 size={26} strokeWidth={1.2} />
            <strong>Validated report</strong>
            <span>Evidence provenance</span>
          </div>
        </div>
        <div className="diagram-bottom">
          <span>
            <ShieldCheck size={13} /> Synthetic events only
          </span>
          <span>6 tool calls · 4 model iterations</span>
        </div>
      </div>
    );

  if (type === "health")
    return (
      <div
        className="architecture architecture-health"
        aria-label="Architecture sketch: Svelte connects clinical records and FHIR patient resources"
      >
        <div className="mini-diagram-label">
          <Network size={15} /> INTEROPERABILITY
        </div>
        <div className="health-flow">
          <div className="diagram-node">
            <Braces size={20} />
            <span>Svelte application</span>
          </div>
          <div className="branch-lines">
            <i />
            <i />
          </div>
          <div className="twin-nodes">
            <div>
              <Database size={18} />
              <span>
                EHRbase<small>Clinical records</small>
              </span>
            </div>
            <div>
              <Database size={18} />
              <span>
                FHIR<small>Patient resources</small>
              </span>
            </div>
          </div>
        </div>
        <span className="diagram-caption">ARCHITECTURE SKETCH / SHARED PATIENT ID</span>
      </div>
    );

  if (type === "billing")
    return (
      <div
        className="architecture architecture-billing"
        aria-label="Architecture sketch: usage data is processed into forecasts and generated billing summaries"
      >
        <div className="mini-diagram-label">
          <Sparkles size={15} /> BILLING INTELLIGENCE
        </div>
        <div className="billing-flow">
          <div className="diagram-node">
            <Binary size={20} />
            <span>Usage data</span>
          </div>
          <ArrowRight size={18} />
          <div className="billing-output">
            <span>
              <span className="tiny-square" /> TensorFlow.js <small>Forecast</small>
            </span>
            <span>
              <Sparkles size={13} /> Gemini <small>Summary</small>
            </span>
          </div>
        </div>
        <span className="diagram-caption">ARCHITECTURE SKETCH / DATA TO INSIGHT</span>
      </div>
    );

  return (
    <div
      className="architecture architecture-rewards"
      aria-label="Architecture sketch: HR, manager, and employee roles access a Spring Boot API"
    >
      <div className="mini-diagram-label">
        <ScanLine size={15} /> ROLE-BASED WORKFLOWS
      </div>
      <div className="rewards-flow">
        <div className="role-nodes">
          <span>HR</span>
          <span>Manager</span>
          <span>Employee</span>
        </div>
        <div className="rewards-line" />
        <div className="diagram-node">
          <ShieldCheck size={20} />
          <span>Spring Boot API</span>
          <Database size={17} />
        </div>
      </div>
      <span className="diagram-caption">ARCHITECTURE SKETCH / RECOGNITION TO REWARDS</span>
    </div>
  );
}
