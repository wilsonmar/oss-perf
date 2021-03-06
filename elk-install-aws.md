This is one of the options listed at <a href="elk-install.md">elk-install.md</a>.

Amazon announced its ElastiSearch Service offering October 1st 2015. See:
<a target="_blank" href="https://aws.amazon.com/blogs/aws/new-amazon-elasticsearch-service/">
https://aws.amazon.com/blogs/aws/new-amazon-elasticsearch-service/</a>

After a month working with it, http://kirankoduru.github.io/elasticsearch/moving-from-aws-elasticsearch-service.html
identified reasons why he got away from it:

  * AWS's service does not consume credits companies accumulate.

  * AWS does not provide a selection of region, which may cause some latency. 

  * AWS's services uses a back version of Elasticsearch, such as 1.5 when version 2.0 is available. 
    This is important for those who don't want to miss out on those bug fixes and shiny new feature releases.

  * AWS's IAM policies are the only way to configure access to its Elasticsearch service.
    That is a good way to secure inbound connections. 
    But some prefer using security groups.

  * AWS turns off dynamic scripting and does not allow script upload into the scripts directory.

  * AWS performs backups only after receiving an email to AWS support rather 
  than allowing the elasticsearch-aws-cloud plugin to configure s3 repositories from the elasticsearch service dashboard.

  * AWS does not include Shield, the Elastic commercial security plugin that handles RBAC of cluster and indexes.

  * AWS is not supported by Elastic Support.

  * AWS controls the <strong>elasticsearch.yml</strong> file containing settings to tweak. 
  The AWS elasticsearch service makes sure everything works perfectly.


The ironic thing is that Elastic's own Found service is run on AWS.'

<a id="Install">
## Install Steps</a>

Below are the steps I took to create a public instance within AWS.

0. Use Firefox to get in <a target="_blank" href="http://aws.amazon.com/ec2/">
   EC2 dashboard at http://aws.amazon.com/ec2/</a>

0. Scroll down to the bottom of the Analytics section to 
  click on the Elasticsearch Service link. 
  The default for me is US West 2, which is in Oregon.

  ```
https://us-west-2.console.aws.amazon.com/es/home?region=us-west-2#
  ```

0. If you want to use a different region, click on "Oregon" (or another) at the upper right corner.
  
0. Clicking on the <a target="_blank" href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-gsg.html">
   Getting Starte Guide</a> opens a new window tab.

0. Click on the blue **Get Started** button.

0. PROTIP: When specifying **domain**, keep to lower case characters and perhaps a number at the end for versioning.
   For example:
 
  ```
  test1
  ```

0. For **Instance type**, since I don't have much data yet during experimentation, 
  I use Free Tier eligible **t2.micro.elasticsearch**.

0. Hover over the (i) icon to the right of **Enable dedicated master**. It says:
   "We recommend that you allocate at least three dedicated master nodes for each production Elastisearch domain."

  I leave blank anyways during experimentation.

0. Hover over the (i) icon to the right of **Enable zone awareness**. It says:
   "Distributes nodes across two Availability Zones..."

0. For Storage, I select EBS with 10 GB of General Purpose (SSD) drives.

  PROTIP: Free tier users gets up to 10 gigabytes of Magnetic or SSD-Backed EBS storage at no charge
  for up to 750 hours per month.

0. After clicking Next, for access policy I select "Allow open access to the domain"
   so anyone can upload documents.

  The version in the file is of AWS access code API version:
  
  ```
  "Version": "2012-10-17",
  ```
  
0. Click Next.
0. Confirm and create. It takes several minutes for Domain status to go from Loading to Ready.
   Below is a sample screen after provisioning:

  <img alt="screen shot 2015-10-13 at 8 31 10 am" src="https://cloud.githubusercontent.com/assets/300046/10459540/d9dc2a2e-7184-11e5-9cbd-d78ac15fb296.png">

  These sample links are no longer active, of course.
  But when it was for me, clicking on https://search-test1-da54anmy3esch22sskcuukwf6i.us-west-2.es.amazonaws.com/
  got me this:
  
  ```
  {
  "status" : 200,
  "name" : "Ikthalon",
  "cluster_name" : "495629083449:test1",
  "version" : {
    "number" : "1.5.2",
    "build_hash" : "62ff9868b4c8a0c45860bebb259e21980778ab1c",
    "build_timestamp" : "2015-04-27T09:21:06Z",
    "build_snapshot" : false,
    "lucene_version" : "4.10.4"
  },
  "tagline" : "You Know, for Search"
}
  ```
  
  Instead of the web UI,
  <a target="_blank" href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-gsg-create-domain.html">
  use AWS ES CLI</a>.
  
0. Click on the Kibana link, such as:
 
  ```
  https://search-test1-da54anmy3esch22sskcuukwf6i.us-west-2.es.amazonaws.com/_plugin/kibana/
  ```
  
  <img alt="screen shot 2015-10-13 at 9 42 48 am" src="https://cloud.githubusercontent.com/assets/300046/10461630/12096628-718f-11e5-808b-5b3e2eee0751.png">
  
0. To make use of the instance using Python in my Mac terminal window:
 
  ```
  pip install elasticsearch
  ```
  
0. For more about using Python for Elastisearch, this article (from November 2014):
  
  http://bitquabit.com/post/having-fun-python-and-elasticsearch-part-1/

