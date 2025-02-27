using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C_
{
    class CountOfPositivesSumOfNegatives
    {
        public static int[] CountPositivesSumNegatives(int[] input)
        {
            if(input == null || input.Length == 0)
            {
                return new int[0];
            }
            int negative = input.Where(x => x < 0).ToArray().Sum();
            int positive = input.Where(x => x > 0).ToArray().Length;

            return [positive,negative];
        }
    }
}
