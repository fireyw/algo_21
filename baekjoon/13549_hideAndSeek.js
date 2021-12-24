const sol = (input) => {
    const [N, K] = input.split(" ").map(Number);
    const visit = Array.from({length: 100100}, () => 0);

    function bfs(N) {
        const queue = [];
        queue.push([N, 0]);

        while (queue.length != 0) {
            const [cur, time] = queue.shift();
            if (cur == K) return time;

            for (let next of [2 * cur, cur - 1, cur + 1]) {
                if (!visit[next] && next <= 100000) {
                    visit[cur] = 1;
                    if (next == 2 * cur) {
                        queue.unshift([next, time]);
                    } else {
                        queue.push([next, time + 1])
                    }
                }
            }

        }
    }

    return bfs(N);
};


require("readline")
.createInterface(process.stdin, process.stdout)
.on("line", (line) => {
    console.log(sol(line));
})
.on("close", () => {
    process.exit();
});
