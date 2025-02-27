using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class Square_n_Sum
    {
        public static int SquareSum(int[] numbers)
        {
            return numbers.Select(x => x * x).Sum();
        }
    }
}
