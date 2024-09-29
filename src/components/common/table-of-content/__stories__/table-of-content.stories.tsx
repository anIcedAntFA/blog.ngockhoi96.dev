import { Meta, StoryObj } from '@storybook/react';
import Image from 'next/image';
import TableOfContent from '../components/toc';

const meta = {
  title: 'Common/TableOfContent',
  component: TableOfContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      name: 'Title',
      description: 'Title of the table of content',
      defaultValue: 'Table of Content',
      control: 'text',
    },
    toc: [
      {
        title: 'Table of Content',
        items: [
          {
            title: 'Getting Started',
            url: '#getting-started',
            items: [
              {
                title: 'Installation',
                url: '#installation',
                items: [],
              },
              {
                title: 'Usage',
                url: '#usage',
                items: [],
              },
            ],
          },
          {
            title: 'Components',
            url: '#components',
            items: [
              {
                title: 'Button',
                url: '#button',
                items: [],
              },
              {
                title: 'Input',
                url: '#input',
                items: [],
              },
            ],
          },
        ],
      },
    ],
  },
} satisfies Meta<typeof TableOfContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  args: {
    title: 'Table of Content',
    toc: [
      {
        title: 'Getting Started',
        url: '#getting-started',
        items: [
          {
            title: 'Installation',
            url: '#installation',
            items: [],
          },
          {
            title: 'Usage',
            url: '#usage',
            items: [],
          },
        ],
      },
      {
        title: 'Components',
        url: '#components',
        items: [
          {
            title: 'Button',
            url: '#button',
            items: [],
          },
          {
            title: 'Input',
            url: '#input',
            items: [],
          },
        ],
      },
    ],
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '1000px',
      }}
    >
      <article style={{ marginTop: '80px', width: '30%' }}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
          quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
          tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
          consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis porro quae deleniti culpa, reiciendis ducimus,
          voluptatum maiores suscipit tenetur aperiam explicabo
          <br />
          dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
          quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
          tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
          consectetur illum sunt!
        </p>
        <Image
          src='/images/login-cover.jpg'
          alt='Placeholder'
          width={600}
          height={400}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
          quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
          tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
          consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis porro quae deleniti culpa, reiciendis ducimus,
          voluptatum maiores suscipit tenetur aperiam explicabo
          <br />
          dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
          quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
          tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
          consectetur illum sunt!
        </p>
        <h2 id='getting-started'>Getting Started</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro quae
        deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit tenetur
        aperiam explicabo dolorem nostrum molestiae, dolor in. Earum consectetur
        illum sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Quis porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
        suscipit tenetur aperiam explicabo dolorem nostrum molestiae, dolor in.
        Earum consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis porro quae deleniti culpa, reiciendis ducimus,
        voluptatum maiores suscipit tenetur aperiam explicabo dolorem nostrum
        molestiae, dolor in. Earum consectetur illum sunt!
        <section>
          <h3 id='installation'>Installation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>
        </section>
        <section>
          <h3 id='usage'>Usage</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>
        </section>
        <section>
          <h2 id='components'>Components</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quis porro quae deleniti culpa, reiciendis
            ducimus, voluptatum maiores suscipit tenetur aperiam explicabo
            <br />
            dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro
            quae deleniti culpa, reiciendis ducimus, voluptatum maiores suscipit
            tenetur aperiam explicabo dolorem nostrum molestiae, dolor in. Earum
            consectetur illum sunt!
          </p>

          <div>
            <h3 id='button'>
              <a href='#button'>Button</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis porro quae deleniti culpa,
              reiciendis ducimus, voluptatum maiores suscipit tenetur aperiam
              explicabo
              <br />
              dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis porro quae deleniti culpa,
              reiciendis ducimus, voluptatum maiores suscipit tenetur aperiam
              explicabo
              <br />
              dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt!
            </p>
          </div>

          <div>
            <h3 id='input'>
              <a href='#input'>Input</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis porro quae deleniti culpa,
              reiciendis ducimus, voluptatum maiores suscipit tenetur aperiam
              explicabo
              <br />
              dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quis porro quae deleniti culpa,
              reiciendis ducimus, voluptatum maiores suscipit tenetur aperiam
              explicabo
              <br />
              dolorem nostrum molestiae, dolor in. Earum consectetur illum sunt!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              porro quae deleniti culpa, reiciendis ducimus, voluptatum maiores
              suscipit tenetur aperiam explicabo dolorem nostrum molestiae,
              dolor in. Earum consectetur illum sunt!
            </p>
          </div>
        </section>
      </article>
      <TableOfContent {...args} />
    </div>
  ),
};
