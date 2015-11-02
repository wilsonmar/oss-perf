This section describes how to generate what JMeter needs to emulate a lot of clients calling REST APIs defined in Swagger.

This page describes what JMeter scripts tests:

1). <a href="#BadResponseCodes">Valid atomic calls with bad response codes</a>.

2). <a href="#HappyPath">Happy paths: Valid atomic calls with valid response codes</a>.

3). <a href="#AtomicRunTypes">Atomic run types</a>.

4). <a href="#InvalidFieldValues">Invalid field values</a>.

5). <a href="#CrossFieldEdits">Cross-field edits</a>.

<a href="#Resources">Videos</a>

<hr />

1). <a id="BadResponseCodes">
## Bad response codes</a>

 0. 400 (not found)
 0. 500 (server issues)
 0. etc.


<a id="CleanHappyPath">
## 2). Clean Happy paths</a>
Valid atomic calls with valid response codes

 2.1). POST new (user registration)

 2.2). GET new (lists)
 
 2.3). PUT change
 
 2.4). DELETE newly created, which keeps database empty.

<a id="AtomicRunTypes">
### 3). Atomic run types (perftest)</a>
3). "run-type" parameter defines repeating processing strategies.

 3.1) Repeat POST new to populate the database and identify how many can register all at once.

 3.2) Repeat GETs to identify cache hits and impact of caching.
 
 3.3) Repeat PUTs 
 
 3.4) Impact of database replication (log shipping).

<a id="InvalidFieldValues">
## 4). Invalid field values</a>
There are different invalid values for each data type.

  * Currency number has negative
  * Phone number has too few numbers
  * Phone number has wrong area code
  * Zip code has text characters (as UK Postal code)
  * Credit card number has invalid checksum

<a id="CrossFieldEdits">
## 5) Cross-field edits</a>
There are different invalid values for each data type.

  * Zip code out of state specified
  * Content-Type header doesn’t match the body

## Resources:
Sources:

https://www.youtube.com/watch?v=UuxKpmIrK4w
API Testing and Debugging @ APIStrat SF

https://www.youtube.com/watch?v=heh4OeB9A-c
How to Design a good API and Why It Matters
(Google TechTalk Jan. 24, 2007 Joshua Bloch)

 "APIs live forever. Bad APIs create an un-ending stream of support calls."
 
 "inter-modular boundaries are APIs".

https://www.youtube.com/watch?v=BtAYZ3pHg4c
Developer Friendly API Designs
Nov 16, 2011 by Ferenc Milhaly 

https://www.youtube.com/watch?v=QlQm786MClE
Secrets of Awesome API Design

https://www.youtube.com/watch?v=mZ8_QgJ5mbs
Beautiful REST & JSON APIs

https://www.youtube.com/watch?v=hdSrT4yjS1g
REST+JSON API Design - Best Practices for Developers
by Stormpath

https://www.youtube.com/watch?v=qCdpTji8nxo
How to create great APIs
(at Facebook Developer Day 2013)
