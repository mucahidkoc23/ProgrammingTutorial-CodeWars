using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class HighestAndLowest
    {
        public static string HighAndLow(string numbers)
        {
            int[] num = numbers.Split(" ").Select(x => Int32.Parse(x.ToString())).ToArray();
            int min = num.Min();
            int max = num.Max();
            return $"{max} {min}";
        }
    }
}
