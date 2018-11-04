<template>
  <div class="grid-2 contacts-info">
    <div class="residence">
      <h2 class="title">
        <span class="green-text">GMS</span> Headquarters
      </h2>
      <div class="residence__info">
        <div class="residence__address">
          <p>Global Message Services Ukraine LLC</p>
          <p>Bundesstrasse 5 | 3rd Floor</p>
          <p>6300 Zug</p>
          <p>Switzerland</p>
          <a href="tel:41415446200" class="contacts-link contacts-link--tel">+41 41 544 62 00</a>
        </div>
        <div class="residence__contacts">
          <div>
            <p>Email</p>
            <a href="#" class="contacts-link">INFO@GMS-WORLDWIDE.COM</a>
          </div>
          <div>
            <p>Send message</p>
            <a href="#" class="contacts-link">VIBER US</a>
          </div>
          <div>
            <p>Send form</p>
            <a href="#" class="contacts-link">CONTACT US</a>
          </div>
        </div>
      </div>
    </div>
    <div class="support">
      <div class="support__info">
        <h2 class="title">
          Technical support <span class="green-text">24/7</span>
        </h2>
        <p class="support__text">
          GMS understands that it can be hard to follow all new technologies. We regularly provide for all our
          clients educational trainings to make your operator`s business earn more and better though our best practices.
        </p>
        <a href="tel:41415446200" class="contacts-link contacts-link--tel">+41 41 544 62 06</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactsInfo',
  };
</script>

<style lang="scss" scoped="">
  .contacts-info {
    padding-bottom: 90px;
  }

  .residence,
  .support{
    width: 47%;
  }

  .residence {

    &__info {
      display: flex;
      justify-content: space-between;

      & > * {

      }
    }

    p {
      margin-top: 0;
      margin-bottom: 5px;
    }
  }

  .support__text {
    line-height: 28px;
  }
</style>
