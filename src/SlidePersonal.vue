<template>
  <button @click="shareCanvas" type="button" class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Share Canvas
  </button>

  <div ref="slide" class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-14">
        <div class="max-w-md mx-auto">
          <span class="flex items-center">
            <img src="/img/acacha_dev_logo1.png" class="h-12"/>
            <span class="font-bold tracking-widest uppercase text-3xl text-gray-800">Acacha_dev</span>
          </span>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto object-cover object-center" src="/me.jpg" alt="" width="384" height="512">
                <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                    <p class="text-lg font-semibold">
                      “M'apassiona aprendre coses i ensenyar-les als altres”
                    </p>
                  </blockquote>
                  <figcaption class="font-medium">
                    <div class="text-cyan-600">
                      Sergi Tur Badenas
                    </div>
                    <div class="text-gray-500">
                      <a href="https://acacha.github.io">https://acacha.github.io</a>
                    </div>
                  </figcaption>
                </div>
              </figure>
              <ul class="list-disc space-y-2">
                <li class="flex items-start">
                  <span class="h-6 flex items-center sm:h-7">
                    <a href="https://instagram.com/acacha_dev" target="_blank">
                      <img src="/img/instagram1.png" alt="Instagram logo" class="w-6 h-6">
                    </a>
                  </span>
                  <p class="ml-2">
                    <a href="https://instagram.com/acacha_dev" target="_blank">
                      Follow me <code class="text-sm font-bold text-gray-800">@acacha_dev</code></a>
                  </p>
                </li>
                <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <a href="https://youtube.acacha.org" target="_blank">
                    <img src="/img/youtube1.png" alt="Youtube logo" class="w-6 h-6">
                  </a>
                </span>
                  <p class="ml-2">
                    <a href="https://youtube.acacha.org" target="_blank">
                      Screencasts
                      <code class="text-sm font-bold text-gray-900">youtube.acacha.org</code>
                    </a>
                  </p>
                </li>
                <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <a href="https://twitter.com/BadenasTur" target="_blank">
                    <img src="/img/twitter.png" alt="Twitter logo" class="w-6 h-6">
                  </a>
                </span>
                  <a href="https://twitter.com/BadenasTur" target="_blank">
                    <p class="ml-2">Piulades a <code class="text-sm font-bold text-gray-900">@BadenasTur</code> </p>
                  </a>
                </li>
                <li class="flex items-start">
                <span class="h-6 flex items-center sm:h-7">
                  <a href="https://twitter.com/BadenasTur" target="_blank">
                    <img src="/img/github.png" alt="Github logo" class="w-6 h-6">
                  </a>
                </span>
                  <a href="https://github.com/acacha" target="_blank">
                    <p class="ml-2">Codi a <code class="text-sm font-bold text-gray-900">github.com/acacha</code> </p>
                  </a>
                </li>
              </ul>
              <p>Que us sembla el nou slide responsive de marca personal? <code class="font-bold">Follow me</code> si voleu aprendre a fer aquest tipus de dissenys i altres amb tailwindCSS</p>
            </div>
            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
              <p>Vols esponsoritzar els meus continguts?</p>
              <p class="flex">
                <img src="/img/github.png" alt="Github logo" class="w-6 h-6 mr-4">
                <a href="https://github.com/sponsors/acacha" class="text-cyan-600 hover:text-cyan-700" target="_blank"> Github Sponsorship &rarr; </a>
              </p>
              <p class="flex">
                <img src="/img/buymeacoffe.png" alt="Buyme a coffe logo" class="w-6 h-6 mr-4">
                <a href="https://www.buymeacoffee.com/acacha" class="text-cyan-600 hover:text-cyan-700" target="_blank"> Buy me a coffe &rarr; </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas';

export default {
  methods: {
    async shareCanvas() {
      const canvasElement = await html2canvas(this.$refs.slide);
      const dataUrl = canvasElement.toDataURL();
      const blob = await (await fetch(dataUrl)).blob();
      const filesArray = [
        new File(
            [blob],
            'animation.png',
            {
              type: blob.type,
              lastModified: new Date().getTime()
            }
        )
      ];
      const shareData = {
        files: filesArray,
      };
      navigator.share(shareData);
    },
    async share() {
      const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://developer.mozilla.org'
      }

      console.log('TODO')
      try {
        await navigator.share(shareData)
      } catch(err) {
        console.log('Error');
        console.log(err)
      }
    }
  }
}
</script>

