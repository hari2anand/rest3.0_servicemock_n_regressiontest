
var links= {

    samplelnk:function(reqDetails){return [
        { rel: "self", method: "GET", href: reqDetails.requrl},
        { rel: "TestSample", method: ("POST,GET"), title: 'Test Sample1', href: reqDetails.requrl+'/sample1' },
        { rel: "TestSample", method: ("POST,GET"), title: 'Test Sample2', href: reqDetails.requrl+'/sample2' }];
    },
    samplelnk2:function(reqDetails){return [        
        { rel: "TestSample", method: ("GET"), title: 'Test Sample3', href: reqDetails.requrl+'/sample3' },
        { rel: "TestSample", method: ("GET,PUT"), title: 'Test Sample4', href: reqDetails.requrl+'/sample4' }];
    }
}
module.exports= links;