using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class DescendingOrder
    {
        public static int Descending(int num)
        {
            int[] array = num.ToString().Select(x => Convert.ToInt32(x.ToString())).ToArray();
            int[] sort = array.OrderDescending().ToArray();
            return Convert.ToInt32(string.Join("", sort));
        }

        //OR Solution 2

        //public static int Descending(int num)
        //{
        //    return int.Parse(string.Concat(num.ToString().OrderByDescending(x => x)));
        //}
    }
}
