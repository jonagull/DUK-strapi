module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff4b4e00eb8f19b70056d29fe0bb4fea'),
  },
});
