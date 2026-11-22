window.CCOC_SCENARIOS = [
  {
    "title": "Operation Mandate",
    "organization": "Meridian Commerce",
    "location": "Tampa, Florida / Dublin, Ireland",
    "role": "Chief compliance advisor",
    "brief": "A 420-person payment technology company has acquired an Irish analytics subsidiary. A customer support portal exposed account identifiers after a misconfigured access policy. The company processes payment transactions through an external provider, stores employee information, and serves EU customers through its Irish establishment.",
    "pressure": "The board meets in 90 minutes. Legal counsel has warned that the incident may trigger obligations in multiple jurisdictions, while the CFO insists that cybersecurity investment must demonstrate a measurable business return. A major customer is considering terminating its contract.",
    "objective": "Deliver a board-ready business case distinguishing legal obligations, contractual commitments and discretionary risk treatments.",
    "chapters": [
      1,
      2,
      3,
      4
    ],
    "domains": [
      1,
      6
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Jurisdiction and scope",
        "evidence": "The data inventory identifies EU customer records, Florida residents and outsourced card processing.",
        "prompt": "Which approach determines applicable obligations?",
        "options": [
          "Map entities, data, contracts and jurisdictions",
          "Apply every regulation uniformly",
          "Wait for a regulator to make contact"
        ],
        "transitions": [
          "Counsel can prioritize applicable duties, but must confirm the facts.",
          "The team wastes resources on irrelevant obligations while missing scope distinctions.",
          "Potential deadlines continue to run while leadership lacks an applicability assessment."
        ]
      },
      {
        "title": "Reasonable security",
        "evidence": "An internal ticket shows an administrator warned about the portal configuration three months ago.",
        "prompt": "How should the organization handle the warning?",
        "options": [
          "Close the ticket as obsolete",
          "Treat the warning as conclusive proof of liability",
          "Preserve the ticket and evaluate foreseeable risk"
        ],
        "transitions": [
          "Loss of evidence creates further legal exposure.",
          "Counsel challenges the unsupported conclusion.",
          "The record supports a defensible investigation."
        ]
      },
      {
        "title": "Contractual exposure",
        "evidence": "A customer agreement requires prompt incident escalation and documented security safeguards.",
        "prompt": "What is the next action?",
        "options": [
          "Promise that no breach occurred",
          "Review the actual contract and notify according to its terms",
          "Use only statutory deadlines"
        ],
        "transitions": [
          "The unverified assurance undermines trust.",
          "The contract review identifies obligations distinct from legislation.",
          "The customer may allege missed contractual duties."
        ]
      },
      {
        "title": "Business justification",
        "evidence": "The CFO provides a hypothetical annual loss estimate of $750,000 and a $150,000 control budget.",
        "prompt": "How should the board evaluate investment?",
        "options": [
          "Compare expected loss reduction and mandatory duties",
          "Approve only controls with positive ROI",
          "Approve everything without analysis"
        ],
        "transitions": [
          "The board can compare cost, uncertainty and non-discretionary duties.",
          "Mandatory requirements may remain unmet.",
          "Funding is approved without an accountable prioritization model."
        ]
      },
      {
        "title": "Risk ownership",
        "evidence": "Operations requests an exception to MFA for legacy administrators.",
        "prompt": "What governance response is appropriate?",
        "options": [
          "Allow an indefinite exception",
          "Treat the exception as purely technical",
          "Document scope, compensating controls, owner and expiry"
        ],
        "transitions": [
          "Unbounded exposure remains.",
          "Business accountability is unclear.",
          "The exception becomes a reviewable governance decision."
        ]
      },
      {
        "title": "Regulator inquiry",
        "evidence": "A simulated regulator requests evidence of the security program.",
        "prompt": "What evidence should be supplied?",
        "options": [
          "Unreviewed bulk exports of sensitive records",
          "Validated policies, logs and assessment records with limitations",
          "A marketing statement of compliance"
        ],
        "transitions": [
          "Unnecessary disclosure introduces privacy risk.",
          "The response supports traceable assertions.",
          "The regulator requests substantiation."
        ]
      },
      {
        "title": "Board recommendation",
        "evidence": "Leadership requests a decision on funding and remediation.",
        "prompt": "What final recommendation is most defensible?",
        "options": [
          "Prioritize mandatory actions and risk-based investments with milestones",
          "Defer until litigation begins",
          "Guarantee that all future incidents will be prevented"
        ],
        "transitions": [
          "The board receives an actionable plan.",
          "Exposure remains unresolved.",
          "The guarantee is unsupported."
        ]
      }
    ]
  },
  {
    "title": "Operation Digital Justice",
    "organization": "Aster Research",
    "location": "Raleigh, North Carolina",
    "role": "Digital investigation lead",
    "brief": "A research firm discovers unusual downloads of proprietary engineering documents by a departing analyst. The analyst used a managed laptop and personal cloud storage. The security team possesses endpoint logs but lacks authorization to inspect private accounts.",
    "pressure": "Human resources wants immediate termination, legal counsel seeks preservation, and a manager proposes using a saved password to access the analyst's personal mailbox.",
    "objective": "Develop a legally bounded investigation with evidence integrity and privacy safeguards.",
    "chapters": [
      2,
      5,
      7,
      9
    ],
    "domains": [
      1,
      2,
      5,
      7
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Authority",
        "evidence": "The manager provides a password from a browser export.",
        "prompt": "How do you define investigative scope?",
        "options": [
          "Access every account using the password",
          "Ignore authorization because theft is suspected",
          "Obtain documented authority for corporate systems"
        ],
        "transitions": [
          "Personal account access creates additional exposure.",
          "Counsel halts the investigation.",
          "The investigation has defined boundaries."
        ]
      },
      {
        "title": "Preservation",
        "evidence": "Endpoint logs expire in 24 hours.",
        "prompt": "What should happen first?",
        "options": [
          "Copy everything to personal storage",
          "Preserve relevant logs and document custody",
          "Delete irrelevant findings immediately"
        ],
        "transitions": [
          "Sensitive evidence leaves controlled storage.",
          "Evidence remains available for review.",
          "Potential evidence is lost."
        ]
      },
      {
        "title": "Monitoring",
        "evidence": "HR proposes continuous monitoring of all employees.",
        "prompt": "How should you assess it?",
        "options": [
          "Review purpose, notice, proportionality and applicable law",
          "Enable covert monitoring universally",
          "Assume consent to employment permits all surveillance"
        ],
        "transitions": [
          "Monitoring receives a scoped review.",
          "Privacy complaints intensify.",
          "Legal authority remains unresolved."
        ]
      },
      {
        "title": "Attribution",
        "evidence": "A shared service account appears in the logs.",
        "prompt": "How do you interpret the evidence?",
        "options": [
          "Identify the departing analyst as guilty",
          "Dismiss the incident",
          "Corroborate before attributing conduct"
        ],
        "transitions": [
          "An unsupported accusation creates liability.",
          "The investigation misses potential misconduct.",
          "Alternative explanations can be tested."
        ]
      },
      {
        "title": "Disclosure",
        "evidence": "Police request a copy of employee communications.",
        "prompt": "What is the response?",
        "options": [
          "Refuse all communication automatically",
          "Route through counsel and validate legal authority",
          "Transfer every mailbox"
        ],
        "transitions": [
          "A potentially lawful request is not evaluated.",
          "Disclosure is documented and scoped.",
          "Third-party privacy is exposed."
        ]
      },
      {
        "title": "Remediation",
        "evidence": "The investigation finds excessive access privileges.",
        "prompt": "Which response is appropriate?",
        "options": [
          "Correct access and preserve investigation records",
          "Erase accounts before preservation",
          "Retain excessive privileges indefinitely"
        ],
        "transitions": [
          "Security improvements proceed without destroying evidence.",
          "Evidence integrity is compromised.",
          "Access risk persists."
        ]
      }
    ]
  },
  {
    "title": "Operation Governance",
    "organization": "Atlas Financial Group",
    "location": "New York / London",
    "role": "Enterprise risk architect",
    "brief": "A financial services group is integrating three acquired companies. Each uses different security policies, risk registers and identity platforms. Its board has approved a governance initiative but has not selected a framework.",
    "pressure": "A client requires independent assurance, while a business unit demands rapid migration without waiting for risk analysis.",
    "objective": "Create a target cybersecurity governance and risk program with defensible framework selection.",
    "chapters": [
      1,
      3,
      4,
      8
    ],
    "domains": [
      1,
      2,
      3,
      6
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Framework selection",
        "evidence": "The board wants a common outcome vocabulary.",
        "prompt": "What do you recommend?",
        "options": [
          "Choose a framework solely by popularity",
          "Use CSF outcomes and map applicable control requirements",
          "Treat certification as a substitute for risk management"
        ],
        "transitions": [
          "The selection lacks business justification.",
          "A common outcome structure supports mapping.",
          "Risk ownership remains unclear."
        ]
      },
      {
        "title": "Asset inventory",
        "evidence": "Three subsidiaries disagree on critical assets.",
        "prompt": "How do you establish scope?",
        "options": [
          "Inventory assets, dependencies and owners",
          "Include only servers",
          "Use the oldest inventory unchanged"
        ],
        "transitions": [
          "Risk analysis gains a defensible scope.",
          "Critical services may be omitted.",
          "The baseline contains stale records."
        ]
      },
      {
        "title": "Risk rating",
        "evidence": "A payment service has high impact but uncertain likelihood.",
        "prompt": "How do you rate it?",
        "options": [
          "Assign precision without evidence",
          "Ignore low-confidence risks",
          "Document assumptions and uncertainty"
        ],
        "transitions": [
          "False precision distorts prioritization.",
          "Material exposure can be overlooked.",
          "Leadership can review uncertainty."
        ]
      },
      {
        "title": "Control mapping",
        "evidence": "Two frameworks contain similar access requirements.",
        "prompt": "What does the similarity establish?",
        "options": [
          "No useful relationship",
          "Related objectives requiring scope and evidence review",
          "Automatic compliance with both"
        ],
        "transitions": [
          "Duplicate work increases.",
          "Mapping supports efficient assessment.",
          "Unsupported equivalence creates gaps."
        ]
      },
      {
        "title": "Governance",
        "evidence": "A business executive wants to accept a regulatory violation.",
        "prompt": "How should governance respond?",
        "options": [
          "Distinguish risk acceptance from mandatory duties",
          "Approve any signed exception",
          "Transfer all accountability to IT"
        ],
        "transitions": [
          "Legal constraints remain visible.",
          "A signature does not waive law.",
          "Accountability becomes fragmented."
        ]
      },
      {
        "title": "Roadmap",
        "evidence": "Funding permits only three initiatives initially.",
        "prompt": "How do you prioritize?",
        "options": [
          "Fund the easiest controls",
          "Divide funding equally",
          "Use mandatory obligations, risk and dependencies"
        ],
        "transitions": [
          "Important gaps remain.",
          "Allocation ignores risk.",
          "The roadmap addresses critical exposure."
        ]
      }
    ]
  },
  {
    "title": "Operation Assurance",
    "organization": "Nightingale Defense Systems",
    "location": "Huntsville, Alabama",
    "role": "Independent control assessor",
    "brief": "A defense engineering supplier bids on a contract involving controlled unclassified information. Its cloud provider claims authorization, its subcontractor provides an expired assessment, and its IT team says MFA is enabled everywhere.",
    "pressure": "Contract award depends on demonstrating applicable requirements. A sales executive pressures the assessment team to mark unsupported controls as compliant.",
    "objective": "Produce a defensible assessment, vendor recommendation and corrective action plan.",
    "chapters": [
      1,
      3,
      4,
      8,
      13
    ],
    "domains": [
      1,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Contract scope",
        "evidence": "The draft contract references CUI and cybersecurity clauses.",
        "prompt": "What is your first assessment step?",
        "options": [
          "Verify clauses, information flows and applicable versions",
          "Assume every system is in scope",
          "Accept the sales team's summary"
        ],
        "transitions": [
          "Assessment boundaries are documented.",
          "Costs expand without scope justification.",
          "Requirements may be missed."
        ]
      },
      {
        "title": "MFA evidence",
        "evidence": "Policy says MFA is mandatory, but configuration exports show exceptions.",
        "prompt": "How do you assess effectiveness?",
        "options": [
          "Accept policy as proof",
          "Mark every account failed without testing",
          "Examine configuration and test representative accounts"
        ],
        "transitions": [
          "Implementation gaps are overlooked.",
          "The finding exceeds available evidence.",
          "Evidence supports a qualified finding."
        ]
      },
      {
        "title": "Cloud assurance",
        "evidence": "The vendor advertises FedRAMP status without identifying the service boundary.",
        "prompt": "What do you request?",
        "options": [
          "Reject every cloud vendor",
          "Verify authorization scope and customer responsibilities",
          "Accept the logo"
        ],
        "transitions": [
          "A potentially suitable vendor is discarded.",
          "The actual service can be assessed.",
          "The logo does not establish coverage."
        ]
      },
      {
        "title": "Subcontractor",
        "evidence": "A supplier provides an expired report.",
        "prompt": "What is appropriate?",
        "options": [
          "Request current evidence and assess interim safeguards",
          "Treat the historical report as current",
          "Ignore the supplier"
        ],
        "transitions": [
          "Residual supplier risk becomes visible.",
          "Assurance is overstated.",
          "Supply-chain exposure remains unknown."
        ]
      },
      {
        "title": "Finding severity",
        "evidence": "Management disputes a high-risk finding.",
        "prompt": "How do you respond?",
        "options": [
          "Lower severity to protect revenue",
          "Omit the finding",
          "Document criteria, evidence and management response"
        ],
        "transitions": [
          "Risk is misrepresented.",
          "The report becomes incomplete.",
          "The assessment retains integrity."
        ]
      },
      {
        "title": "Corrective action",
        "evidence": "The contract deadline approaches.",
        "prompt": "What remediation record is needed?",
        "options": [
          "Close every finding immediately",
          "Owner, milestones, evidence and applicable eligibility constraints",
          "Promise future compliance without details"
        ],
        "transitions": [
          "Open deficiencies are concealed.",
          "Corrective actions can be tracked.",
          "The promise is not verifiable."
        ]
      }
    ]
  },
  {
    "title": "Operation Breach Clock",
    "organization": "Meridian Health Technologies",
    "location": "Florida / European Union",
    "role": "Incident response coordinator",
    "brief": "A healthcare technology provider detects ransomware across scheduling and billing services. An attacker posts sample records online; logs indicate possible access to patient data, but investigators have not established the full scope.",
    "pressure": "Clinical partners demand restoration, the privacy officer is evaluating reporting triggers, and the executive team is considering a ransom payment.",
    "objective": "Coordinate containment, continuity, evidence preservation and applicable notification decisions.",
    "chapters": [
      1,
      2,
      3,
      9,
      10,
      12
    ],
    "domains": [
      1,
      2,
      4,
      7
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Containment",
        "evidence": "A compromised server supports patient scheduling.",
        "prompt": "What response balances operational and security risks?",
        "options": [
          "Disconnect all clinical systems immediately",
          "Leave compromised systems online indefinitely",
          "Coordinate isolation with continuity procedures"
        ],
        "transitions": [
          "Clinical disruption may increase.",
          "Attacker access may continue.",
          "Containment proceeds with continuity planning."
        ]
      },
      {
        "title": "Breach assessment",
        "evidence": "Investigators confirm unauthorized access but not all impacted data.",
        "prompt": "How do you determine reporting duties?",
        "options": [
          "Apply one universal deadline",
          "Track facts, jurisdiction, awareness and applicable triggers",
          "Wait for perfect certainty"
        ],
        "transitions": [
          "Distinct legal triggers are confused.",
          "Counsel can evaluate obligations as facts develop.",
          "Applicable deadlines may be missed."
        ]
      },
      {
        "title": "Evidence",
        "evidence": "A restoration image could overwrite volatile records.",
        "prompt": "What should the response team do?",
        "options": [
          "Coordinate preservation and recovery with documented decisions",
          "Overwrite immediately without review",
          "Delay all restoration indefinitely"
        ],
        "transitions": [
          "Evidence and continuity are balanced.",
          "Important artifacts may disappear.",
          "Operational harm increases."
        ]
      },
      {
        "title": "Ransom demand",
        "evidence": "The attacker requests cryptocurrency.",
        "prompt": "How should leadership evaluate payment?",
        "options": [
          "Pay immediately",
          "Assume insurance makes payment lawful",
          "Consult counsel, sanctions guidance and recovery alternatives"
        ],
        "transitions": [
          "Payment introduces unresolved exposure.",
          "Insurance does not determine legality.",
          "Legal and operational risks are reviewed."
        ]
      },
      {
        "title": "Communications",
        "evidence": "A journalist requests confirmation of affected individuals.",
        "prompt": "What is appropriate?",
        "options": [
          "Deny the incident despite evidence",
          "Use verified facts and coordinated approved messaging",
          "Publish unconfirmed names"
        ],
        "transitions": [
          "Trust and legal exposure worsen.",
          "Communications remain accurate and accountable.",
          "Privacy harm increases."
        ]
      },
      {
        "title": "Recovery",
        "evidence": "Backups are available but not yet tested.",
        "prompt": "How do you restore safely?",
        "options": [
          "Validate backups and monitor staged recovery",
          "Restore all systems without verification",
          "Resume normal operations before containment"
        ],
        "transitions": [
          "Recovery risk is managed.",
          "Reinfection remains possible.",
          "Residual compromise may persist."
        ]
      }
    ]
  },
  {
    "title": "Operation Strategic Shield",
    "organization": "Sentinel Orbital & Energy",
    "location": "Gulf Coast / allied partner nation",
    "role": "Strategic cyber advisor",
    "brief": "A commercial satellite communications provider supports electric-grid operators and emergency response agencies. Ground-station telemetry becomes unreliable following a suspected intrusion. A regional power operator reports intermittent loss of remote communications.",
    "pressure": "Intelligence suggests a foreign actor but attribution is uncertain. Government agencies request coordination, while executives seek immediate retaliatory options.",
    "objective": "Assess critical infrastructure and space-system obligations, continuity, and legally bounded strategic response.",
    "chapters": [
      3,
      6,
      8,
      10,
      11,
      13
    ],
    "domains": [
      1,
      3,
      4,
      7
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Critical services",
        "evidence": "A ground-station outage affects multiple customers.",
        "prompt": "What should be prioritized?",
        "options": [
          "Disable every connected service",
          "Map dependencies and safety-critical service continuity",
          "Treat it as an ordinary office IT outage"
        ],
        "transitions": [
          "Cascading disruption may expand.",
          "Continuity decisions reflect systemic impacts.",
          "Safety consequences may be missed."
        ]
      },
      {
        "title": "Control applicability",
        "evidence": "A utility customer references NERC CIP.",
        "prompt": "How do you assess its relevance?",
        "options": [
          "Verify entity, assets and applicable requirements",
          "Apply NERC CIP to all satellites automatically",
          "Ignore sector requirements"
        ],
        "transitions": [
          "Scope is grounded in actual obligations.",
          "Requirements are misapplied.",
          "Contractual or regulatory duties may be missed."
        ]
      },
      {
        "title": "Space segment",
        "evidence": "Telemetry anomalies could reflect equipment failure or intrusion.",
        "prompt": "How should the team respond?",
        "options": [
          "Assume a hostile attack",
          "Transmit unvalidated corrective commands",
          "Corroborate anomalies and protect command integrity"
        ],
        "transitions": [
          "Attribution becomes premature.",
          "Unsafe commands may cause harm.",
          "The team preserves safe operations."
        ]
      },
      {
        "title": "Attribution",
        "evidence": "An intelligence report identifies a probable foreign actor.",
        "prompt": "How should leadership characterize it?",
        "options": [
          "Dismiss intelligence entirely",
          "Distinguish confidence, evidence and state responsibility",
          "Declare certainty publicly"
        ],
        "transitions": [
          "Relevant intelligence is ignored.",
          "Decision-makers understand uncertainty.",
          "Escalation risk increases."
        ]
      },
      {
        "title": "Response authority",
        "evidence": "A director proposes disrupting a foreign network.",
        "prompt": "What is appropriate?",
        "options": [
          "Refer to authorized government and legal channels",
          "Conduct unilateral retaliation",
          "Assume defensive intent permits all action"
        ],
        "transitions": [
          "Authority and international law are evaluated.",
          "Unauthorized actions risk escalation and liability.",
          "Legal boundaries remain unresolved."
        ]
      },
      {
        "title": "Coordination",
        "evidence": "Government partners ask for technical indicators.",
        "prompt": "How should information be shared?",
        "options": [
          "Publish all operational details",
          "Refuse all coordination",
          "Use approved channels and validate disclosure scope"
        ],
        "transitions": [
          "Sensitive infrastructure details may leak.",
          "Collective response is weakened.",
          "Useful indicators are shared responsibly."
        ]
      }
    ]
  },
  {
    "title": "Operation Regulatory Horizon",
    "organization": "Veridian AI Compliance",
    "location": "Boston / Brussels",
    "role": "AI assurance lead",
    "brief": "A multinational enterprise pilots an AI assistant that extracts contractual obligations, maps security controls and drafts regulatory reports. During testing it cites a repealed requirement, fabricates a control reference, and sends sensitive contract text to an external service.",
    "pressure": "The vendor promises major cost savings. Legal counsel requires reliable citations and privacy safeguards, while executives want immediate deployment.",
    "objective": "Evaluate AI-supported compliance benefits, reliability, data handling and emerging legal developments.",
    "chapters": [
      1,
      4,
      8,
      9,
      10,
      13
    ],
    "domains": [
      1,
      2,
      6,
      8
    ],
    "duration": 60,
    "tasks": [
      {
        "title": "Use-case scope",
        "evidence": "Executives propose autonomous legal determinations.",
        "prompt": "What role should AI perform?",
        "options": [
          "Use bounded assistance with accountable human review",
          "Delegate final legal decisions entirely",
          "Ban every analytical use"
        ],
        "transitions": [
          "The role supports productivity with oversight.",
          "Unsupported decisions may become operational.",
          "Potential safe benefits are lost."
        ]
      },
      {
        "title": "Citation validation",
        "evidence": "The AI references a regulation that cannot be found.",
        "prompt": "What is appropriate?",
        "options": [
          "Accept the citation because output sounds credible",
          "Replace it with another unverified citation",
          "Verify against authoritative texts and record failures"
        ],
        "transitions": [
          "False obligations may enter the program.",
          "The evidence remains unreliable.",
          "The error informs reliability assessment."
        ]
      },
      {
        "title": "Data processing",
        "evidence": "Vendor logs retain submitted contracts.",
        "prompt": "What should be assessed?",
        "options": [
          "Assume encryption resolves every issue",
          "Review data flows, terms, retention and safeguards",
          "Upload all contracts immediately"
        ],
        "transitions": [
          "Other processing risks remain.",
          "Privacy and contractual risks are identified.",
          "Confidential material may be exposed."
        ]
      },
      {
        "title": "Control crosswalk",
        "evidence": "AI reports full compliance from a policy document.",
        "prompt": "How do you validate it?",
        "options": [
          "Require implementation and operational evidence",
          "Accept the AI score",
          "Discard all automated mappings"
        ],
        "transitions": [
          "The mapping becomes a hypothesis to test.",
          "Assurance is overstated.",
          "Useful assistance is unnecessarily excluded."
        ]
      },
      {
        "title": "Emerging legislation",
        "evidence": "A proposed bill is described as binding law.",
        "prompt": "What distinction is required?",
        "options": [
          "Treat all proposals as enacted",
          "Ignore all emerging developments",
          "Verify legislative status, scope and effective dates"
        ],
        "transitions": [
          "Resources may be misallocated.",
          "Future exposure may be missed.",
          "Strategic monitoring distinguishes obligations from trends."
        ]
      },
      {
        "title": "Deployment approval",
        "evidence": "The pilot shows mixed accuracy.",
        "prompt": "What release decision is defensible?",
        "options": [
          "Approve based solely on vendor claims",
          "Use limited deployment with metrics and review gates",
          "Authorize unrestricted autonomy"
        ],
        "transitions": [
          "Due diligence is insufficient.",
          "Benefits can be evaluated under controlled conditions.",
          "Errors may scale."
        ]
      }
    ]
  },
  {
    "title": "Operation Compliance Verdict",
    "organization": "Horizon Integrated Holdings",
    "location": "United States / European Union",
    "role": "Lead enterprise auditor",
    "brief": "A diversified holding company operates health technology, financial services, defense supply and satellite communications subsidiaries. The board has received conflicting compliance reports and a major prospective customer requests proof of security posture.",
    "pressure": "A restricted audit window and competing remediation budgets require prioritization. Several findings from earlier assessments remain unresolved.",
    "objective": "Deliver an integrated compliance dossier and executive corrective action roadmap.",
    "chapters": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ],
    "domains": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "duration": 75,
    "tasks": [
      {
        "title": "Scope",
        "evidence": "Subsidiaries have different legal and contractual duties.",
        "prompt": "How do you establish the audit universe?",
        "options": [
          "Use one universal checklist without scope",
          "Exclude acquired subsidiaries",
          "Map entities, data, services and obligations"
        ],
        "transitions": [
          "Sector obligations may be missed.",
          "Material exposure remains outside review.",
          "Audit criteria reflect organizational realities."
        ]
      },
      {
        "title": "Evidence quality",
        "evidence": "One subsidiary has policies but no test records.",
        "prompt": "How do you classify the evidence?",
        "options": [
          "Declare every control absent",
          "Record design evidence and request operating evidence",
          "Mark full compliance"
        ],
        "transitions": [
          "The conclusion exceeds evidence.",
          "Findings distinguish evidence limitations.",
          "Assurance is overstated."
        ]
      },
      {
        "title": "Risk aggregation",
        "evidence": "Three business units share one identity provider.",
        "prompt": "How do you assess concentration risk?",
        "options": [
          "Map common dependencies and correlated impacts",
          "Treat all risks as independent",
          "Ignore shared services"
        ],
        "transitions": [
          "Enterprise exposure is better understood.",
          "Risk estimates may be misleading.",
          "A systemic dependency is missed."
        ]
      },
      {
        "title": "Incident readiness",
        "evidence": "A tabletop revealed contradictory reporting procedures.",
        "prompt": "What action is appropriate?",
        "options": [
          "Adopt one deadline for every jurisdiction",
          "Remove reporting from exercises",
          "Reconcile reporting triggers and assign accountable owners"
        ],
        "transitions": [
          "Legal distinctions are lost.",
          "Readiness remains untested.",
          "Procedures reflect applicable duties."
        ]
      },
      {
        "title": "Supplier assurance",
        "evidence": "A critical vendor cannot document subcontractor access.",
        "prompt": "What recommendation is defensible?",
        "options": [
          "Terminate immediately without continuity review",
          "Require evidence, safeguards and risk-based escalation",
          "Accept verbal assurance"
        ],
        "transitions": [
          "Operational disruption may result.",
          "Supplier risk is managed with continuity in mind.",
          "Assurance gaps remain."
        ]
      },
      {
        "title": "AI and trends",
        "evidence": "A proposed regulation and AI tool may change the program.",
        "prompt": "What should the roadmap include?",
        "options": [
          "Versioned monitoring and validated AI assistance",
          "Treat predictions as binding requirements",
          "Ignore both until enforcement"
        ],
        "transitions": [
          "The program anticipates change responsibly.",
          "The roadmap rests on unsupported claims.",
          "Strategic preparedness declines."
        ]
      },
      {
        "title": "Executive verdict",
        "evidence": "The board asks whether the enterprise is compliant.",
        "prompt": "How should you report?",
        "options": [
          "Declare universal compliance",
          "Provide only technical vulnerability counts",
          "Present scoped findings, limitations, priorities and owners"
        ],
        "transitions": [
          "The declaration exceeds evidence.",
          "Legal and governance context is absent.",
          "The board receives defensible assurance."
        ]
      }
    ]
  }
];
