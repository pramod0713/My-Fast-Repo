var tringle=
{
  length:20,
  breadth:10,
  area:function()
    {
      var multi=this.length*this.breadth;
      return multi;
    },

  perimeter:function()
    {
      var sum=(this.length+this.breadth)*2;
      return sum;
    }
};

console.log('area of tringle','-',tringle['area']());
console.log('perimeter of tringle','-',tringle['perimeter']());