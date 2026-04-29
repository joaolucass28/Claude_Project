# Building Custom MCP Servers for Client Businesses

## Executive Summary

For client-facing MCP work, the most reliable path is to treat MCP as a protocol contract first (JSON-RPC lifecycle/capabilities), then productize specific business operations as tools/resources/prompts behind strict auth and transport controls.[^1][^2][^3][^4]  
For production delivery, avoid using reference/demo servers directly: the official `servers` repository explicitly frames them as educational, not production-ready implementations.[^5]  
On the TypeScript SDK side, current `main` is pre-alpha v2 and the maintainers recommend v1.x for production today; this should influence client project risk planning and version pinning.[^6]  
For remote deployments, Streamable HTTP + OAuth-based authorization + explicit DNS-rebinding and host-header protections are the baseline security posture, with session strategy (stateful vs stateless) chosen per scalability needs.[^3][^7][^8][^9]

## Prerequisites

1. **Protocol baseline**: Your team should align on MCP’s required base protocol + lifecycle behavior (initialize/initialized, capability negotiation, request/response/notification semantics).[^1][^2]  
2. **Transport decision**: Choose `stdio` for local process integrations (desktop/CLI) vs Streamable HTTP for network-accessible business services.[^3][^10]  
3. **Auth strategy (HTTP servers)**: Plan OAuth-compatible authorization flows and token validation requirements before implementation to avoid retrofitting security later.[^4]  
4. **SDK/runtime policy**: For TypeScript projects, set a branch/version policy consistent with official stability guidance (v1.x for production at time of writing).[^6]

## Steps

1. **Define the client business surface area as MCP primitives**
   - Model deterministic business actions as **tools** (with explicit `inputSchema`/optional `outputSchema`).[^11]  
   - Model contextual data as **resources** (read/list/subscribe patterns where needed).[^12]  
   - Model guided reusable workflows as **prompts** (argument completion support if useful).[^13]  
   - This decomposition matches MCP’s capability negotiation model and keeps contracts explicit.[^2]

2. **Implement lifecycle and capability negotiation first**
   - Ensure `initialize` is first, return server capabilities, and wait for `notifications/initialized` before normal traffic.[^2]  
   - Enforce negotiated protocol version/capabilities in runtime behavior, not just docs.[^2][^3]

3. **Choose transport architecture by client operating model**
   - **Embedded/local deployments**: `stdio` is simpler and recommended for local integrations.[^3][^10]  
   - **Hosted business service**: Streamable HTTP with optional SSE, endpoint/session handling, and protocol version headers.[^3]  
   - If using TypeScript HTTP integrations, prefer the middleware wrappers that include safer defaults (including host-header validation guidance).[^9][^14]

4. **Design authorization and token handling for multi-client business environments**
   - For HTTP transports, follow MCP authorization guidance rooted in OAuth 2.1 + metadata discovery requirements.[^4]  
   - Enforce bearer token handling rules, resource indicators, and audience validation so tokens cannot be replayed across services/tenants.[^4]  
   - Use PKCE and registered redirect URIs for public client flows.[^4]

5. **Implement tool safety and user-governance controls**
   - Keep a human-in-the-loop option for sensitive operations and require confirmations where business risk exists.[^11]  
   - Validate tool inputs/outputs, rate-limit invocations, and enforce call timeouts/cancellation handling.[^11][^2]

6. **Pick state model for scale-out early**
- For Streamable HTTP, decide between stateful sessions (resumability/session IDs) vs stateless operation (simpler horizontal scaling).[^15]  
   - For multi-node patterns, use the SDK’s documented deployment references to select stateless/persistent/distributed routing approaches.[^16]

7. **Use official examples for implementation scaffolding, not final architecture**
   - Use reference servers/SDK quickstarts to bootstrap patterns, then replace with client-specific auth, tenancy, audit, and reliability controls.[^5][^17][^10]

## Recommended Delivery Blueprint (Client Engagement)

| Phase | Deliverable | Source-backed constraints |
|---|---|---|
| Discovery | Tool/resource/prompt map + capability matrix | Must align with MCP capability negotiation and feature model.[^1][^2] |
| Security design | Auth flow, token validation, transport hardening checklist | HTTP auth/OAuth requirements, Origin checks, host/header safeguards.[^3][^4][^9] |
| Build | Server skeleton + 1–3 high-value tools + schema contracts | Tool schemas and capability declarations are normative MCP behavior.[^11] |
| Hardening | Observability, timeouts, error taxonomy, human approval points | Lifecycle timeout/cancellation guidance + tool safety guidance.[^2][^11] |
| Scale | Session strategy + deployment topology | Streamable HTTP session/resume semantics and multi-node patterns.[^3][^16] |

## Key Repositories Summary

| Repository | Purpose | Key files used |
|---|---|---|
| [modelcontextprotocol/modelcontextprotocol](https://github.com/modelcontextprotocol/modelcontextprotocol) | Normative protocol/specification | `docs/specification/2025-06-18/basic/*`, `docs/specification/2025-06-18/server/*` |
| [modelcontextprotocol/typescript-sdk](https://github.com/modelcontextprotocol/typescript-sdk) | TypeScript server/client implementation and deployment guidance | `README.md`, `docs/server.md` |
| [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk) | Python SDK + FastMCP patterns/examples | `README.md` |
| [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Official reference servers/examples | `README.md` |

## Confidence Assessment

- **High confidence (verified)**: protocol lifecycle/capabilities, transport and security requirements, auth/token handling requirements, and official SDK positioning are directly supported by the cited specification/SDK sources.[^1][^2][^3][^4][^6]  
- **Medium confidence (inferred synthesis)**: the “delivery blueprint” sequencing (discovery → hardening → scale) is an engineering synthesis built from protocol and SDK constraints rather than a single prescriptive upstream runbook.[^2][^3][^11][^16]

## Footnotes

[^1]: [`docs/specification/2025-06-18/basic/index.mdx:11-20,27-33`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/index.mdx#L11-L33) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^2]: [`docs/specification/2025-06-18/basic/lifecycle.mdx:40-48,76-123,146-178,206-218`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/lifecycle.mdx#L40-L218) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^3]: [`docs/specification/2025-06-18/basic/transports.mdx:7-15,61-78,84-99,176-195,242-257`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/transports.mdx#L7-L257) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^4]: [`docs/specification/2025-06-18/basic/authorization.mdx:19-22,55-66,76-90,194-199,235-267,289-320,327-338,362-366`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/authorization.mdx#L19-L366) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^5]: [`README.md:3-10`](https://github.com/modelcontextprotocol/servers/blob/4503e2d12b799448cd05f789dd40f9643a8d1a6c/README.md#L3-L10) (commit `4503e2d12b799448cd05f789dd40f9643a8d1a6c`)
[^6]: [`README.md:3-7`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/README.md#L3-L7) (commit `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`)
[^7]: [`docs/specification/2025-06-18/basic/transports.mdx:76-78`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/transports.mdx#L76-L78) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^8]: [`docs/specification/2025-06-18/basic/authorization.mdx:235-267`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/basic/authorization.mdx#L235-L267) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^9]: [`docs/server.md:547-573`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/docs/server.md#L547-L573) (commit `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`)
[^10]: [`README.md:95-120`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/README.md#L95-L120) and [`README.md:94-99`](https://github.com/modelcontextprotocol/python-sdk/blob/3d7b311de07aade1281d18aa7b04689a81ab8793/README.md#L94-L99) (commits `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`, `3d7b311de07aade1281d18aa7b04689a81ab8793`)
[^11]: [`docs/specification/2025-06-18/server/tools.mdx:24-31,38-58,104-112,187-188,308-309,425-436`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/server/tools.mdx#L24-L436) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^12]: [`docs/specification/2025-06-18/server/resources.mdx:32-50,87-96,126-135,202-235`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/server/resources.mdx#L32-L235) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^13]: [`docs/specification/2025-06-18/server/prompts.mdx:30-37,50-59,94-103,136-142`](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/6523895fcdc479b20911a9faaea32daa21c5cf1e/docs/specification/2025-06-18/server/prompts.mdx#L30-L142) (commit `6523895fcdc479b20911a9faaea32daa21c5cf1e`)
[^14]: [`README.md:46-53,80-91`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/README.md#L46-L91) (commit `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`)
[^15]: [`docs/server.md:36-52`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/docs/server.md#L36-L52) (commit `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`)
[^16]: [`docs/server.md:588-591`](https://github.com/modelcontextprotocol/typescript-sdk/blob/7cccc2aca81f4cd961d2a0ef53e879f68a01df73/docs/server.md#L588-L591) (commit `7cccc2aca81f4cd961d2a0ef53e879f68a01df73`)
[^17]: [`README.md:136-185,200-207`](https://github.com/modelcontextprotocol/python-sdk/blob/3d7b311de07aade1281d18aa7b04689a81ab8793/README.md#L136-L207) (commit `3d7b311de07aade1281d18aa7b04689a81ab8793`)
