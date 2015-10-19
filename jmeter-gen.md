This page describes what JMeter scripts tests:

1). <a href="#HappyPath">Happy paths: Valid atomic calls with valid response codes</a>.

2). <a href="#BadResponseCodes">Valid atomic calls with bad response codes</a>.

3). <a href="#InvalidFieldValues">Invalid field values</a>.

4). <a href="#CrossFieldEdits">Cross-field edits</a>.

<a href="#Resources">Videos</a>

<hr />

<a id="CleanHappyPath">
## 1). Clean Happy paths</a>
Valid atomic calls with valid response codes

 1.1). POST new (user registration)

 1.2). GET new (list)
 
 1.3). PUT change
 
 1.4). DELETE newly created, which keeps database empty.

<a id="AtomicRunTypes">
### Atomic run types</a>
A "run-type" parameter defines repeating processing strategies.

 1.1) Repeat POST new to populate the database and identify how many can register all at once.

 1.2) Repeat GETs to stress reads.
 
 1.3) Repeat PUTs 
 
 1.4) Impact of database replicate (log shipping).

2). <a id="BadResponseCodes">
## Bad response codes</a>

 0. 400 (not found)
 0. 500 (server issues)
 0. etc.


<a id="InvalidFieldValues">
## Invalid field values</a>
There are different invalid values for each data type.

  * Currency number has negative
  * Phone number has too few numbers
  * Phone number has wrong area code
  * Zip code has text characters (as UK Postal code)
  * Credit card number has invalid checksum

<a id="CrossFieldEdits">
## Cross-field edits</a>
There are different invalid values for each data type.

  * Zip code out of state specified

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
