using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class ShortestWord
    {
        public static int FindShort(string s)
        {
            int array = s.Split(" ").Select(x => x.Length).ToArray().Min();
            
            return array;
        }
    }
}
