var clone={
    JSON: function(obj)
    {
        obj= JSON.parse(JSON.stringify(obj));
        return obj;
    },
    STRING: function(obj)
    {
        obj= JSON.stringify(JSON.parse(JSON.stringify(obj)));
        return obj;
    },
    DATE: function(obj)
    {
        if (null == obj || "object" != typeof obj) return obj;
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    },
    ARRAY: function(obj)
    {
        if (null == obj || "object" != typeof obj) return obj;
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = (obj[i]);
        }
        return copy;
    },
    OBJ:function(obj)
    {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = (obj[attr]);
        }
        return copy;
    }
};
module.exports= clone;