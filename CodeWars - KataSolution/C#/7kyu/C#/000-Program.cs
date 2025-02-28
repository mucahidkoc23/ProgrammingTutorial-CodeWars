using System.Text.Json;

namespace C_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Vowel Count
            //Console.WriteLine(VowelCount.GetVowelCount("abracadabra"));

            //Disemvowel Trolls
            //Console.WriteLine(DisemvowelTrolls.Disemvowel("This website"));

            //Square Every Digit
            //Console.WriteLine(SquareEveryDigit.SquareDigits(123));

            //Highest and Lowest
            //Console.WriteLine(JsonSerializer.Serialize(HighestAndLowest.HighAndLow("-1 1 2 3 4 5")));

            //Descending Order
            Console.WriteLine(JsonSerializer.Serialize(DescendingOrder.Descending(123445)));

            Console.ReadKey();
        }
    }
}
