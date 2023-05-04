Question 10

Codewriting

A DNS (Domain name server) is used to map domain names to IP addresses. You have to complete a function dnsImplementation(args) which is capable of the following operations

PUT, create an entry corresponding to given domain name, do not return anything.
GET, retrieve ip address for given domain name, return found ip address or 404 if not found
COUNT, count and return all ip addresses corresponding to domain and all its subdomains.
Assume
IP address is only in IPv4 format eg. [0-255].[0-255].[0-255].[0-255]
Only characters the domain name contains are [a-z] and .(dot)

Input/Output
The input args will be a matrix of strings. Each row in matrix denotes an operation. All rows are to be executed sequentially. Each operation row has max 3 string element, OP, DOMAIN and IP respectively .

Important: Return only array of strings, as other data types will be considered invalid

Example input:

[
["PUT", "www.phonepe.com", "10.20.30.40"],
["PUT", "careers.phonepe.com", "10.20.30.50"],
["PUT", "sites.google.com", "142.250.183.238"],
["GET", "example.com"],
["GET", "www.phonepe.com"],
["COUNT", "phonepe.com"],
["COUNT", "com"]
]
Output:

["404", "10.20.30.40", "2", "3"]
Explanation: After parsing first 3 instructions you will have 3 domain entries. Next instructions yields results as follows -

GET example.com, since we don't have entry for this domain, returns => "404"
GET www.phonepe.com, this domain should be stored already so returns corresponding ip => "10.20.30.40"
COUNT phonepe.com, under phonepe.com, we have two subdomains so return => "2"
COUNT com, under com we have 3 subdomains so return => "3"
[execution time limit] 4 seconds

[memory limit] 1 GB
