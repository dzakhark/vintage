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
            <a href="mailto:INFO@GMS-WORLDWIDE.COM" class="contacts-link">INFO@GMS-WORLDWIDE.COM</a>
          </div>
          <div>
            <p>Send message</p>
            <a href="viber://chat?number=+41415446200" class="contacts-link">VIBER US</a>
          </div>
          <div>
            <p>Send form</p>
            <a href="#contactUs" class="contacts-link" v-scroll-to="'.contact-us'">CONTACT US</a>
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

  .residence {
    padding-right: 20px;

    &__info {
      display: flex;
      justify-content: space-between;
    }

    &__address {
      padding-right: 15px;
    }

    &__contacts {
      padding-left: 15px;
    }

    p {
      margin-top: 0;
      margin-bottom: 5px;
    }
  }

  .support {
    padding-left: 20px;
  }

  @media (max-width: 850px) {
    .support,
    .residence {
      padding: 0;
    }
  }

  @media (max-width: 580px) {
    .residence {
      padding-right: 20px;

      &__info {
        display: block;
      }

      &__address {
        padding-right: 0;
      }

      &__contacts {
        padding-left: 0;
      }
    }
  }
</style>
