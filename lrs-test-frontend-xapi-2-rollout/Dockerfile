FROM node:16

ARG CONFORMANCE_SUITE_BRANCH

# Create our NodeJS source directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy the project in
COPY ./ /usr/src/app/

# Install the packages
RUN echo "Installing Frontend Packages" \
    && npm install --save
    
RUN echo "Installing Conformance Suite" \
    && git clone https://github.com/adlnet/lrs-conformance-test-suite -b ${CONFORMANCE_SUITE_BRANCH} \
    && cd lrs-conformance-test-suite \
    && npm install --save --omit=dev

COPY config.docker.js config.js

# Start the service
CMD ["node", "app.js"]
