var levelup = require('levelup')


/* 1st
// open a data store
//var db = levelup('/tmp/dprk.db')
var db = levelup('/tmp/dprk.db', function (err, db) {
// a simple Put operation
//db.put('name', 'Kim Jong-un', function (err) {

  // a Batch operation made up of 3 Puts
/*  db.batch([
      { type: 'put', key: 'spouse', value: 'Ri Sol-ju' }
    , { type: 'put', key: 'dob', value: '8 January 1983' }
    , { type: 'put', key: 'occupation', value: 'Clown' }
  ], function (err) {
*
    // read the whole store as a stream and print each entry to stdout
    db.createReadStream({
      start: 'name',
      end: 'spouse',
      limit: 2,
      reverse: false,
      keys: 'name',
      values: 'Clown'
    })
      .on('data', console.log)
      .on('close', function () {
        db.close()
      })
  //})
});
*/

//2nd
var db = levelup('/tmp/dprk.db', {valueEncoding: 'json'},  function (err, db) {
  // db.put(
  //   '0', 
  //   {
  //       name       : 'Kim Jong-un'
  //     , spouse     : 'Ri Sol-ju'
  //     , dob        : '8 January 1983'
  //     , occupation : 'Clown'
  //   },
  //   function (err) {}
  // );

  db.batch([
    {
      type: 'put', 
      key: '3', 
      value:
      {
        name       : 'Park',
        spouse     : 'Shin',
        dob        : '1974',
        occupation : 'Kingdom'
      }
    },
    {
      type: 'put', 
      key: '5', 
      value:
      {
        name       : 'Jang2',
        spouse     : 'Jun',
        dob        : '1979',
        occupation : 'Car'
      }
    }], function (err) {
      
    }
  );

  // db.batch([
  //   {type: 'del', key: 'dob'},
  //   {type: 'del', key: 'name'},
  //   {type: 'del', key: 'occupation'},
  //   {type: 'del', key: 'spouse'}
  //   ], function(err) {}
  // );

  // db.del('dprk',function (err) {
  //     db.get('0', function (err, value) {
  //       console.log('0:', value);
  //     });
  //     db.get('1', function (err, value) {
  //       console.log('1:', value);
  //     });
  //     db.get('2', function (err, value) {
  //       console.log('2:', value);
  //       //db.close();
  //     });
  // });

  db.createReadStream({
    limit: 20,
    reverse: true
    })
  .on('data', function (data) {
    console.log(data.key, '=', data.value);
  })
  .on('error', function (err) {
    console.log('Oh my!', err);
  })
  .on('close', function () {
    db.close();
  })
  // .on('end', function () {
  //   console.log('Stream closed')
  // })
  
});
