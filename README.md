# mongodb-for-fhir-resource

Ok, this is an experiment project for my master thesis.

At the basic of the origin code for mongodb version of FHIR resource from fhir.org.

What I want to do is convert the data type of different health and medical wearable device to FHIR resources in mongoDB.

- Firstly, establish a meta data framework of WD data.
- Secondly, map the framework to FHIR resources.
- Finally, code and prepare some real data of WD
- Well done!

## Useage

```
git clone https://github.com/zelda/mongodb-for-fhir-resource.git

npm install

node app.js (install and start mongo service)

```

## MongoDB on mac

- [https://segmentfault.com/a/1190000002547229]https://segmentfault.com/a/1190000002547229
- [http://www.jianshu.com/p/dd0c39bf7be4](http://www.jianshu.com/p/dd0c39bf7be4)
- 
## Issues

- `node app.js` ---> `Error: 'options' may not be used as a schema pathname` at `app/models/questionnaire.js` line 71 

`options` is a reserved schema names that can't be used.

So I change one name for `options`

- 
