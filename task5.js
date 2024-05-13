// a b c d e 
function delay(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function printSeq() {
  await delay('a');
  await delay(('b'));
  await delay('c', 3000);
  await delay('d', 0);
  await delay('e');
}

printSeq();