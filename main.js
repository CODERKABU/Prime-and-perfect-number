 // User-defined function to find prime numbers
 function findPrimeNumbers() {
    let limit = 100;
    let primes = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    document.getElementById("primeNumbers").innerText = "Prime numbers up to 100: " + primes.join(', ');
}

// Arrow function to find perfect numbers
const findPerfectNumbers = () => {
    let limit = 10000;
    let perfectNumbers = [];

    for (let num = 2; num <= limit; num++) {
        let sum = 1;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                sum += i;
                if (i != Math.sqrt(num)) {
                    sum += num / i;
                }
            }
        }

        if (sum == num && sum != 1) {
            perfectNumbers.push(num);
        }
    }

    document.getElementById("perfectNumbers").innerText = "Perfect numbers up to 10000: " + perfectNumbers.join(', ');
}