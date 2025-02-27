using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class GrasshopperSummation
    {
        public static int summation(int num)
        {
            List<int> sum = new List<int>();

            for (int i = 0; i <= num; i++)
            {
                sum.Add(i);
            }
           return sum.Sum();
        }
    }
}
