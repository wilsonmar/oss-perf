Watcher provides an API for creating, managing, and testing 
<strong>watches</strong> which runs automatically on a <strong>schedule</strong> to <strong>query</strong> data within Elasticsearch.

Watcher checks the results of the query against predefined <strong>conditions</strong> for <strong>action</strong> such as 
anomalies that exceed a <strong>threshold</strong>.
When appropriate, watcher sends an email, notify a 3rd-party system, and/or store query results.

A watch describes a single alert in Watcher, which can contain multiple notification actions.

inputs

transforms

* https://www.elastic.co/guide/en/watcher/current/watching-marvel-data.html

* https://www.elastic.co/guide/en/watcher/current/index.html

<a name="Versions">
## Versions Download</a>

| Version |
| 2.2 |
| 2.1 |
| 2.0 |
| 1.0 |

<a name="Installation">
## Installation</a>

Watcher is licensed to paying customers, so first install the license plugin from ES_HOME:

   ```
   bin/plugin install license
   ```

