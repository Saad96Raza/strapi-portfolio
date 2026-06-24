import type { Schema, Struct } from '@strapi/strapi';

export interface ContactFormsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_forms_contact_forms';
  info: {
    displayName: 'contactForm';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    first: Schema.Attribute.String & Schema.Attribute.Required;
    last: Schema.Attribute.String & Schema.Attribute.Required;
    message: Schema.Attribute.Text & Schema.Attribute.Required;
    phone: Schema.Attribute.Integer & Schema.Attribute.Required;
    subject: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact-forms.contact-form': ContactFormsContactForm;
      'sections.section': SectionsSection;
    }
  }
}
