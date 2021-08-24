<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" prepend-icon="mdi-note" :rules="rules"></v-text-field>
                        <v-text-field label="Category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>
                        <v-textarea label="Content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>
                        <v-file-input label="Select Image" :rules="rules" show-size counter multiple></v-file-input>
                        <v-btn type="submit" color="primary" class="mt-5">Add Post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            rules:[(value) => !!value || "This field is required"],
        }
    }
}
</script>