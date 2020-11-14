# Test

```mermaid
graph TD

Component0

subgraph Box1
Component1
end

subgraph Box2
Component2
end

DB[(DB)]

Component0 --> Component1
Component1 --> Component2
Component2 --> DB

```
