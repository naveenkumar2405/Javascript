        var object = { name: "Rajinikanth", age: 23, hasPets: false };
        function printAllValues(a) {
          var obj = Object.values(object);
          console.log(obj);
        }
        printAllValues(object);
