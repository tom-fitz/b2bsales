<template>
<v-container fluid style="background-color: #FFB74D">
        <v-row>
            <v-col cols="12">
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col 
                        md="8"
                        :align="alignment"
                        :justify="justify"
                    >
                        <h2>Sales Tips</h2>
                    </v-col>
                </v-row>
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col 
                        md="8"
                        :align="alignment"
                        :justify="justify"
                    >
                        <p>You can use this area to display any information you want about sales tips to preface your vistors. Also we can change the colors, so don't think anything here is set in stone.</p>
                    </v-col>
                </v-row>
                <v-row
                :align="alignment"
                :justify="justify"
                >
                    <v-col md="8">
                        <v-card
                        class="ma-3 pa-6"
                        outlined
                        tile
                        >
                        <v-tabs
                        v-model="tab"
                        background-color="primary"
                        dark
                        >
                            <v-tab
                                v-for="item in items"
                                :key="item.tab"
                            >
                                {{ item.tab }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item
                                v-for="item in items"
                                :key="item.tab"
                            >
                                <v-card flat>
                                <v-card-title>{{ item.title }}</v-card-title>
                                <v-card-text>{{ item.content }}</v-card-text>
                                <v-card-actions>
                                    <v-btn text>Read More <v-icon>mdi-chevron-right</v-icon></v-btn>
                                </v-card-actions>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "sales-tips-section",
    data: () => ({
        alignment: 'center',
        justify: 'center',
        tab: null,
        items: [
          { tab: 'One', title: 'Sale Tip 1 Title', content: 'Sales tip content goes here. This can be limited/brief text or display the whole post, up to you. The "tab" can display anything you want, so instead of "One", I was thinking it could display the posts date, but what ever you think will work best. These are very customizable, so you can also bring in pictures, and links and whatever else you see fit.' },
          { tab: 'Two', content: 'Tab 2 Content' },
          { tab: 'Three', content: 'Tab 3 Content' },
          { tab: 'Four', content: 'Tab 4 Content' },
          { tab: 'Five', content: 'Tab 5 Content' },
          { tab: 'Six', content: 'Tab 6 Content' },
          { tab: 'Seven', content: 'Tab 7 Content' },
          { tab: 'Eight', content: 'Tab 8 Content' },
          { tab: 'Nine', content: 'Tab 9 Content' },
          { tab: 'Ten', content: 'Tab 10 Content' },
        ],
    })
}
</script>
<style>
</style>