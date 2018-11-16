# reVeal 

**reVeal** is a visualization component that builds of the logging ideas set forth by [Pioneer Logs](https://github.com/PioneerCode/pioneer-logs) and by way of [Serilog](https://serilog.net/).  It provides visibility into centralized logging allowing you to discover the root cause of complex problems in a fast and efficient way.

## Why **reVeal**?

**reVeal** was and is inspired by the "great" log viewers of the past and present: [Elmah](https://elmah.github.io/), [Exceptional](https://github.com/NickCraver/StackExchange.Exceptional), [Seq](https://getseq.net/), [Kibana](https://github.com/elastic/kibana), to name a few. With one of the main differences being a focus on centralized logging across large system.  

- Scalability, speed, and ETL is managed through the rich eco-system of [ElasticSearch](https://www.elastic.co/). 
- **Unified** and **structure** logging contracts are managed by way of [Pioneer Logs](https://github.com/PioneerCode/pioneer-logs).

### Why not Kibana?

Kibana is great! It serves a lot of use-cases well and offers a **tightly coupled** set of tools that solve a lot of problems. **reVeal** on the other hand takes a more singular approach and only focuses on logging. More importantly, **reVeal** is **not** coupled to any one system and can be used as a component in your customized applications.  

- Consume an Angular Component through npm.
  - Integrate it into your already developed applications.
  - Don't use Angular?  No problem. Plans to produce an [Angular Elements](https://angular.io/guide/elements) build is already in the works.
