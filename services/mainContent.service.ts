import axios from "axios";

// Ts: 1
// Private: b5cfab56c2144ea1f3f1a0da5de693567976e6e6
// Public: 61d42f2732c29aba356d6e77ebf05c3f
// To generate: 1b5cfab56c2144ea1f3f1a0da5de693567976e6e661d42f2732c29aba356d6e77ebf05c3f
// Result MD5 HASH: 240e604bf405316accc5a9886350bbc9
export const getComics = async (setComics: (e: any) => void) => {
    axios.get(`http://gateway.marvel.com/v1/public/comics?limit=100&ts=1&apikey=61d42f2732c29aba356d6e77ebf05c3f&hash=240e604bf405316accc5a9886350bbc9`)
        .then((res) => {
            setComics(res.data.data.results);
        });
}