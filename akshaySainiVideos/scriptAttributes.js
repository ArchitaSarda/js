// html parsing
// loading of scripts
//   - fetching of scripts via network
//   - execution of scripts line by line

// <script>
// ________         ________
//         ____.____


// <script async> - does not guarantee execution in sequence of load - used for GA, fonts etc
// ____________     ____
//         ____.____


// <script defer> - maintains loading sequence and executes it in that sequence
// ________________
//         ____    .____